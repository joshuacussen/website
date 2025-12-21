---
aliases:
  - methods
---
## Definition
A [[subprogram]] defined within a [[class]] that implements part of the class's behaviour.

## Characteristics
- Can access and modify [[private]] [[attribute|attributes]] defined in the same class
- Called using dot notation on an [[object]], e.g., `object.method()`
- Can be [[public]] or private, controlling access to the method: private methods may only be called in other methods within the class
- Can take [[parameter|parameters]]
- Can return values
- In Python, [[instance]] methods take `self` as their first parameter (this parameter is always required in the method signature but is not given [[argument|arguments]])

## Examples
- Constructors
- Setters
- Getters
- Other subprograms defined within a class (Python):
```python
class BankAccount():
  # constructor, a method
  def __init__(self, p_account_number):
    self.account_number = p_account_number
    self.__balance = 0 # a private attribute that should only be changed by methods

  # get method (getter), public method
  def get_balance(self):
    return self.__balance

  # set method (setter), public method
  def set_balance(self, new_balance):
    if new_balance < 0:
      raise ValueError("No debt allowed!")
    self.__balance = new_balance

  # public method
  def deposit(self, p_amount):
    self.set_balance(self.__balance + p_amount) # using the set_balance method within another method

  # private method
  def __withdraw(self, p_amount):
    self.set_balance(self.__balance - p_amount) # use the balance setter to update the balance
    return self.get_balance() # methods can return values
```

## Non-examples
- Class: defines the template of an entire object, not just its behaviour
- Attributes: these are data stored in a class or object

## Specification links

### OCR H446
- [[specifications/ocr-h446/component-1/1-2/1-2-4|1.2.4 Types of programming language]]
- [[specifications/ocr-h446/component-2/2-2/2-2-1|2.2.1 Programming techniques]]