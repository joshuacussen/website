---
aliases:
  - attributes
  - property
  - properties
---
## Definition
A [[variable]] associated with either a [[class]] or an [[object]] created from a class.

## Characteristics
- Used in [[object-oriented programming]]
- Can be either [[public]] or [[private]], controlling access from outside the class
- Class-level attributes are shared across all [[instance|instances]]
- Instance-level attributes are unique to each object
- Could be [[initialise|initialised]] with [[argument|arguments]] passed to the [[constructor]] or with default values
- Could be accessed indirectly using a [[getter|get]] [[method]]
- Could be changed using a [[setter|set]] method
## Examples
### Instance-level attribute
In Python, attributes are declared and initialised in the [[constructor]].
```python {4-6}
class BankAccount:

    def __init__(self, p_owner, p_initial_balance):
        self.owner = p_owner
        self.__balance = p_initial_balance
        self.account_type = "Savings"
```

### Class-level attribute
Class-level attributes are defined on the class itself rather than on individual [[object|objects]]. They are shared across all [[instance|instances]] of a class.

In this `BankAccount{:python}` class, every instance can access `interest_rate{:python}`.
```python {2}
class BankAccount:
    interest_rate = 0.03

    def __init__(self, owner):
        self.owner = owner
```

### Modify a public attribute
The values of [[public]] attributes can be changed by accessing them directly.
```python {5}
class BankAccount:
    ...
	
b = BankAccount("Timmy Banks", 500)
b.owner = "Timmy Gold"
```

### Modify an attribute with a method
The values of attributes can be changed using [[method|methods]], including [[setter|setters]] (when they have been implemented).
```python {9}
class BankAccount:
    ...

    def deposit(self, p_amount):
        if p_amount > 0:
            self.__balance = self.__balance + p_amount

b = BankAccount("Timmy Banks", 500)
b.deposit(50)
```

### Declare an attribute (Java)
Most programming languages, including Java, [[declare]] attributes at the start of the class definition rather than in the [[constructor]].
```java {3-5}
public class BankAccount {
    // attributes
    public String name;
    private double balance;
    public String accountType = "Savings";

    // constructor
    public BankAccount(String pOwner, double pInitialBalance) {
        this.owner = pOwner;
        this.balance = pInitialBalance;
    }
}
```
## Non-examples
### Parameter
[[parameter|Parameters]] are not attributes.
```python /p_owner/ /p_initial_balance/
class BankAccount():

    def __init__(self, p_owner, p_initial_balance):
        self.owner = p_owner
        self.__balance = p_initial_balance
        self.account_type = "Savings"
```

### Variable
[[variable|Variables]] are not attributes; e.g., `heal_amount{:python}` is a [[local variable]] and not an attribute.
```python {4}
class Enemy:
    ...
    def heal(self):
        heal_amount = 10
        self.health = self.health + heal_amount
```

### Class
A [[class]] defines the template used to create an entire [[object]].

### Method
[[method|Methods]] define the behaviour of a class.

## Specification links

### OCR H446
- [[specifications/ocr-h446/component-1/1-2/1-2-4|1.2.4 Types of programming language]]
- [[specifications/ocr-h446/component-2/2-2/2-2-1|2.2.1 Programming techniques]]