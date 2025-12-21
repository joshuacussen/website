---
aliases:
  - set method
---
## Definition
A [[method]] that changes the value of an [[object|object's]] [[attribute]].

## Characteristics
- Used in [[object-oriented programming]]
- Provides controlled write access to an attribute without exposing the attribute directly
- Usually named with the `set_` prefix, e.g. `set_name()`
- Supports [[encapsulation]] by controlling how [[data hiding|hidden data]] is modified
- Typically changes the value of a [[private]] attribute
- Often paired with a [[getter]]
- May include logic (e.g., validation or formatting) before changing the attribute

## Examples
```python
class Student:
  # constructor
  def __init__(self, p_name):
    self.__name = p_name

  # setter
  def set_name(self, new_name):
    # validation with a length check
    if len(new_name) > 0:
      self.__name = new_name
```

## Non-examples
- Directly changing a [[public]] attribute, e.g., `student.name = "Jemima"`
- Any method that returns the value of an attribute without changing the attribute

## Specification links

### OCR H446
- [[specifications/ocr-h446/component-1/1-2/1-2-4|1.2.4 Types of programming language]]
- [[specifications/ocr-h446/component-2/2-2/2-2-1|2.2.1 Programming techniques]]