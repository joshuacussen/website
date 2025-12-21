---
aliases:
  - instances
---
## Definition
A specific [[object]] created from a [[class]] template.
## Characteristics
- Created through [[instantiate|instantiation]]
- Has its own state, separate from other instances of the same class
- Has the [[method|methods]] and [[attributes]] defined by its class
- Multiple instances can be created from the same class

## Examples
- An instance of the `Person` class (Python): `r = Person("Rhuadri")`
- Two separate instances of the same `Person` class, each with their own state (Python):
```python
a = Person("Alisdair")
b = Person("Bernadette")
```

## Non-examples
- The class itself: a class is a template, not an instance
- A [[variable]] holding a simple value, e.g., `x = 5`

## Specification links

### OCR H446
- [[specifications/ocr-h446/component-1/1-2/1-2-4|1.2.4 Types of programming language]]
- [[specifications/ocr-h446/component-2/2-2/2-2-1|2.2.1 Programming techniques]]