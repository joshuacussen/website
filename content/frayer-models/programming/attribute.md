---
aliases:
  - attributes
  - property
  - properties
---
## Definition
A [[variable]] associated either with a [[class]] or an [[object]] created from a class.

## Characteristics
- Can be either [[public]] or [[private]], controlling access from outside the class
- Class-level attributes are shared across all [[instance|instances]]
- Instance-level attributes are unique to each object
- Could be [[initalise|initialised]] with [[argument|arguments]] passed to the [[constructor]] or with default values
- Could be accessed using a [[getter|get]] [[method]]
- Could be changed using a [[setter|set]] method
## Examples
Instance-level attributes declared in constructor:
```python
class BankAccount():
  # constructor
  def __init__(self, p_owner, p_initial_balance):
    self.owner = p_owner # owner is a public attribute
    self.__balance = p_initial_balance # balance is a private attribute
    self.account_type = "Savings" # account_type is a public attribute with a default value

    # method to increase balance
  def deposit(self, p_amount):
    if p_amount > 0:
    self.__balance = self.__balance + p_amount # updating balance attribute
```

Changing an attribute by accessing it directly:
```python
b = BankAccount("Timmy Banks", 500)
b.owner = "Timmy Gold" # updating the owner attribute of b
```

Changing an attribute using a method:
```python
class BankAccount():
  account_type  "Savings" # class-level attribute shared across all instances of the class

  # constructor
  def __init__(self, p_owner, p_initial_balance):
    self.owner = p_owner
    self.__balance = p_initial_balance
```

Attributes declared in class definition:
```java
public class BankAccount {
  public String name; // public attribute (instance-level)
  private double balance; // private attribute (instance-level)
  public String accountType = "Savings"; // public attribute (instance-level) with default value

  // constructor
  public BankAccount(String pOwner, double pInitialBalance) {
    this.owner = pOwner;
    this.balance = pInitialBalance;
  }
}
```
## Non-examples
Parameters used in methods:
```python
class BankAccount():
  # constructor
  def __init__(self, p_owner, p_initial_balance): # the parameters are not attributes
    self.owner = p_owner
    self.__balance = p_initial_balance
    self.account_type = "Savings"
```

Variables used in methods:
```python
class Enemy()
  ...
  def heal():
    heal_amount = 10 # local variable, not an attribute
    self.health = self.health + heal_amount # self.health is an attribute
```

- Class: defines the template of an entire object, not its data
- Method: defines the behaviour of a class, not data
## Specification links

### OCR H446
- [[specifications/ocr-h446/component-1/1-2/1-2-4|1.2.4 Types of programming language]]
- [[specifications/ocr-h446/component-2/2-2/2-2-1|2.2.1 Programming techniques]]