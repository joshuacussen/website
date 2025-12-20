---
title: You're using AI wrong
draft: true
---

## Introduction
I have been using AI a lot over the last few weeks to help me develop various projects. I've used it to fill gaps in my knowledge about new-to-me Python libraries, and I've used it to help me consider important architectural choices with systems I've been building.

I started out trying to be responsible. I asked AI to talk me through the process of solving problems: it was helpful, but progress was slow. I was impatient and wanted to build solutions immediately. I changed tactics and asked AI to start writing huge chunks of my code for me.
When I did this, the code worked—but it tended to suck.

Not only did the code suck, I didn't understand it so I couldn't maintain or extend it without relying on AI even more. As I relied on AI to grow my codebase, the quality declined as I became cocooned in a web of mixed dependencies and mired in technical debt. My confusion grew exponentially as the foundations of my systems crumbled and my metaphors became more mixed.
Something was wrong.

In lessons, I've seen students make the same mistakes as me. They get stuck on a question and immediately turn to CoPilot. They need to research something so Google it and read no further than the AI overview. They are behind on homework so ask ChatGPT to write a quick essay for them (write it like I'm 14).

We all fall into the trap of easy answers.

The problem is that there are no easy answers. At least, there are no easy answers worth listening to. Learning requires effort. The problem with how we often use AI is that it short-circuits the effort of learning, giving us the illusion of understanding. We need to change the way we use AI so that it supports our learning, rather than doing all the work for us. 

### Overview

In this article, I explain what we mean when we say 'AI' and (roughly) how it works. I explore its limitations and environmental costs, considering existential questions about the meaning of work, ownership, and the messy interconnectedness of all things. I then explore three main ways students use AI wrong before presenting an antidote: using AI in dialogue rather than as a ghost-writer.

## Who is Al?

### You're using 'AI' wrong
Here's an example of some 'AI' that a year 10 computing student could write:
```python
if power_level > 9000:
    print("AAAARRRGGHHH")
```
Whether you know anything about computing or not, you can probably guess what this does (it prints a scream on the screen if the power level is over 9000).

'AI' has been around for ages. It's inaccurate and foolish to pretend that 'AI' is something new and shiny, and calling things 'AI' as if this somehow makes them magical risks attributing greater power and status than deserved.

There's nothing magical about 'AI': all 'AI' means is automated decision making. We see this in video games, search algorithms, and year 7 Scratch lessons.

When we talk about ChatGPT, Claude, Gemini, et al as 'AI' what we really mean is that they are **generative AI**. This is notably distinct from the 'AI' created across the world in KS3 Computing lessons, and from the Sci-Fi ideal of 'general AI' that is as smart as real humans.

Generative AI (GenAI) is a subset of 'AI' that is able to generate things like text, images, and audio.
Calling this AI is not wrong--but it is misleading. It's like calling a pencil an object: technically correct but nowhere close to the whole picture. Missing out the 'generative' in 'generative AI' risks us thinking better of it than deserved.

We ought to be precise with our language and name things correctly, but the ship on calling GenAI 'AI' has long since sailed. This leaves me shouting angrily at the clouds. As the world has moved on, let's move with it--but let's be absolutely clear that the category of 'AI' includes the gamut of Scratch to Sci-Fi.

From here on, when I talk about 'AI', I mean GenAI.

### How does GenAI work?
One of the first things I tell all my students is this:

> Computers are stupid. They do exactly what you tell them.

GenAI is no different.

GenAI absorbs vast quantities of data and analyses it for patterns. It is then able to regurgitate patterns observed in its training data, predicting which 'token' (word, part of a word, etc.) should come next in the sentence/image/whatever it's creating. It predicts these tokens based on:
- clever maths
- patterns it has seen before
- things it 'thinks' you want to see

GenAI is essentially fancy predictive text that wants to make you happy. It is no more intelligent than the predictive text in your phone.

## Four ignoble truths
1. It's stupid
2. It's biased
3. It's censored
4. It's obedient

### It's stupid: it doesn't 'know' anything
Much like the predictive text in your phone, GenAI has no knowledge of anything. It has no understanding, beliefs, or schema of the world. GenAI simulates understanding by regurgitating patterns—not facts. Imagine a particularly eloquent parrot and you're not far off how GenAI works.

This stupidity is a core, structural limitation of how GenAI works. GenAI is not designed to 'know' things, it is only designed to notice and repeat patterns. It doesn't matter how many versions of ChatGPT get released, it will never get smarter or learn more about the world. It doesn't have the capacity for knowledge.

For example, GenAI has no knowledge of what a 'house' is, or that 'people' might 'live' in one. It may have absorbed patterns in sentences that put the words 'house', 'people', and 'live' in relation to each other, but it has no understanding of what these words mean.

GenAI models 'learn' that the capital of France is Paris by absorbing sentences that say the capital of France is Paris. When you ask GenAI what the capital of France is, it predicts the answer based on the patterns in sentences it has seen before—not by looking up the answer in a magical database.

This simulated understanding is often presented extremely confidently. It really seems like GenAI knows its stuff! When you understand how it works, it becomes unavoidable that you **cannot** trust GenAI for facts. Because GenAI works by guessing what should come next in a sentence, it's prone to inventing things. These fabrications are called hallucinations and are unavoidable. GenAI is a useful tool for creativity but a dangerous source of knowledge.

Would you trust a parrot to do your homework?


### Maybe use this later
It's easy to go to view AI as a fountain of answers, brimming with solutions to all the problems under the sun.
It presents as an omniscient and benevolent teacher-your biggest fan.