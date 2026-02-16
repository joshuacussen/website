import rehypeCitation from "rehype-citation"
import { PluggableList } from "unified"
import { visit } from "unist-util-visit"
import { QuartzTransformerPlugin } from "../types"

export interface Options {
  bibliographyFile: string
  suppressBibliography: boolean
  linkCitations: boolean
  csl: string
}

const defaultOptions: Options = {
  bibliographyFile: "./bibliography.bib",
  suppressBibliography: false,
  linkCitations: false,
  csl: "https://raw.githubusercontent.com/citation-style-language/styles/master/acm-sig-proceedings.csl",
}

export const Citations: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "Citations",
    htmlPlugins(ctx) {
      const plugins: PluggableList = []

      // Add rehype-citation to the list of plugins
      plugins.push([
        rehypeCitation,
        {
          bibliography: opts.bibliographyFile,
          suppressBibliography: opts.suppressBibliography,
          linkCitations: opts.linkCitations,
          csl: opts.csl,
          lang: ctx.cfg.configuration.locale ?? "en-US",
        },
      ])

      // Transform the HTML of the citattions; add data-no-popover property to the citation links
      // using https://github.com/syntax-tree/unist-util-visit as they're just anochor links
      plugins.push(() => {
        return (tree, _file) => {
          let headingAdded = false;

          visit(tree, "element", (node, _index, _parent) => {
            // EDIT: Add 'Reference list' heading before first entry and wrap entries in ul/li
            if (!headingAdded && node.tagName === "div" && node.properties?.id === "refs" && node.properties?.className?.includes("references")) {
              headingAdded = true;

              // Create horizontal rule
              const hrNode = {
                type: "element",
                tagName: "hr",
              };

              // Create 'References list' heading
              const headingNode = {
                type: "element",
                tagName: "h2",
                children: [{ type: "text", value: "References" }],
              };

              // Wrap all csl-entry divs in li elements and put them in a ul
              const cslEntries = node.children.filter((child: any) =>
                child.type === "element" &&
                child.tagName === "div" &&
                child.properties?.className?.includes("csl-entry")
              );

              const otherChildren = node.children.filter((child: any) =>
                !(child.type === "element" &&
                  child.tagName === "div" &&
                  child.properties?.className?.includes("csl-entry"))
              );

              const listItems = cslEntries.map((entry: any) => ({
                type: "element",
                tagName: "li",
                properties: {
                  className: entry.properties?.className, // preserve csl-entry class on li
                },
                children: entry.children, // use the children directly, not the div itself
              }));

              const ulNode = {
                type: "element",
                tagName: "ul",
                children: listItems,
              };

              node.children = [hrNode, headingNode, ...otherChildren, ulNode];
            }


            if (node.tagName === "a" && node.properties?.href?.startsWith("#bib")) {
              node.properties["data-no-popover"] = true;
            }
          })
        }
      })

      return plugins
    },
  }
}
