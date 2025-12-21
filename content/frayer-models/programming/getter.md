---
aliases:
  - get method
---
## Definition
A [[method]] that returns the value of an [[object|object's]] [[attribute]].

## Characteristics
- Provides read-only access to an attribute without exposing the attribute directly
- Usually named with the `get_` prefix, e.g. `get_name()`
- Supports [[encapsulation]] by providing controlled access to hidden data
- Typically returns the value of a [[private]] attribute
- Often paired with a [[setter]]
- May include logic (e.g., formatting or deriving a value) before returning the attribute

## Examples
```python
class Student:
  # constructor
  def __init__(self, p_name):
    self.__name = p_name

  # getter
  def get_name(self):
    return self.__name
```

## Non-examples
- Directly accessing a [[public]] attribute, e.g., `print(student.name)`
- Any method that modifies a value

## Specification links

### OCR H446
- [[specifications/ocr-h446/component-1/1-2/1-2-4|1.2.4 Types of programming language]]
- [[specifications/ocr-h446/component-2/2-2/2-2-1|2.2.1 Programming techniques]]