---
aliases:
  - initialises
  - initialising
  - to initialise
  - initialised
---
## Definition
To [[assign]] an initial value to a [[variable]].

## Characteristics
- Initialisation does not imply that the value cannot change later
- In languages without a separate [[declare|declaration]] step (e.g., Python), initialisation is the moment a variable comes into existence
- In languages like C, C++, and Java, initialisation may happen either after declaration or at the point of declaration

## Examples
- Initialising a variable (Python): `x = 5`
- Initialising a variable after declaration (C):
```C
int x; // declaration
x = 5; // initialisation
```
- Initialising a variable at the point of declaration (C): `int x = 5;`

## Non-examples
- Declaring a variable (C): `int x;`
- Declaring a variable (JavaScript): `let x;`
- Reassigning a variable (Python):
```python
x = 5 # initialisation
x = 10 # reassignment
```
- [[instantiate|Instantiating]] an [[object]] (Python): `r = Person("Rory")`
- Instantiating an object (Java): `Person f = new Person("Fife")`
## Specification links

### OCR J277
- [[specifications/ocr-j277/component-2/2-2/2-2-1|2.2.1 Programming fundamentals]]

### OCR H446
- [[specifications/ocr-h446/component-2/2-2/2-2-1|2.2.1 Programming techniques]]
