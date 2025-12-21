---
aliases:
  - classes
  - template
  - blueprint
---
## Definition
A reusable template/blueprint to organise data ([[attribute|attributes]]) and behaviour ([[method|methods]]).

## Characteristics
- Used in [[object-oriented programming]]
- Can be used to create [[object|objects]] (i.e., [[instance|instances]] of a class)
- Has a [[constructor]] to create instances of itself
- Composed of attributes and methods

## Examples
### Simple class
A simple class with a constructor, attribute, and method.
```python
class Person:
    def __init__(self, p_name):
        self.name = p_name

    def introduce(self):
        print(f"My name is {self.name}")
```

### Class with inheritance
Student [[inheritance|inherits]] from Person.
```python
class Student(Person):
    def __init__(self, p_name, p_id):
        super().__init__(p_name)
        self.student_id = p_id
```
## Non-examples

### Object
[[object|Objects]] are instances of a class created using the class as a template.
```python
person_1 = Person("Alice")
person_2 = Person("Sam")
```

### Attribute
Classes have [[attribute|attributes]].

### Method
Classes have [[method|methods]]

## Specification links

### OCR H446
- [[specifications/ocr-h446/component-1/1-2/1-2-4|1.2.4 Types of programming language]]
- [[specifications/ocr-h446/component-2/2-2/2-2-1|2.2.1 Programming techniques]]