---
aliases:
  - classes
  - template
  - blueprint
---
## Definition
A reusable template to organise data ([[attribute|attributes]]) and behaviour ([[method|methods]]).

## Characteristics
- Used in [[object-oriented programming]]
- Can be used to create [[object|objects]] (i.e., [[instance|instances]] of a class)
- Has a [[constructor]] to create instances of itself
- Composed of attributes and methods

## Examples
```python
class Person():
  # constructor
  def __init__(self, p_name):
    self.name = p_name # assign the name attribute the value of p_name

  # method
  def introduce(self):
    print(f"My name is {self.name}")
```

## Non-examples
- Attributes: classes *have* attributes
- Methods: classes *have* methods
- Objects: instances created from a class, e.g.,
```python
person_1 = Person("Alice") # an instance of the Person class
person_2 = Person("Sam") # another instance of the Person class
```
## Specification links

### OCR H446
- [[specifications/ocr-h446/component-1/1-2/1-2-4|1.2.4 Types of programming language]]
- [[specifications/ocr-h446/component-2/2-2/2-2-1|2.2.1 Programming techniques]]