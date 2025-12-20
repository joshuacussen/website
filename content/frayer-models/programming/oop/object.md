---
aliases:
---
## Definition
A unit of [[encapsulation|encapsulated]] data ([[attribute|attributes]]) and behaviour ([[method|methods]]). An object is the 'thing' that exists in [[random-access memory|memory]] with attributes and can execute its [[class|class's]] methods.

## Characteristics
- Has its own values for its class's attributes
- Can call methods defined in its class
- Is created using the [[constructor]] of its class
- Many different objects can be created from the same class

## Examples
In Python, lists are objects:
```python
names = ["Justice", "Simon", "Ash"] # a list object, an instance of the built-in list class
names.append("Shirley") # using the append method on the list object with the identifier 'names'
```

BankAccount objects are instances of the BankAccount class:
```python
class BankAccount:
  # constructor
  def __init__(self, p_account_number):
    self.account_number = p_account_number
    self.balance = 0

b = BankAccount(12345) # creates a BankAccount object, an instance of the BankAccount class
```
## Non-examples
- [[instance]]: 'instance' describes the relationship of an object to its class; every object is an instance, but 'instance' refers to the relationship, not the actual thing in memory
- Class: a template from which objects are created

## Specification links

### OCR H446
- [[specifications/ocr-h446/component-1/1-2/1-2-4|1.2.4 Types of programming language]]
- [[specifications/ocr-h446/component-2/2-2/2-2-1|2.2.1 Programming techniques]]