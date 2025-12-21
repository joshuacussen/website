---
aliases:
  - cast
  - to cast
---
## Definition
Converting a value from one [[data type]] to another using a casting [[function]].

## Characteristics
- Changes the data type of a value (e.g., [[integer]] to [[float]], [[Boolean data type|Boolean]] to [[string]])
- Common Python functions include:
	- `int(){:python}`
	- `float(){:python}`
	- `str(){:python}`
	- `bool(){:python}`

## Examples

### Conversion table

| Conversion         | Example                  | Result            |
| ------------------ | ------------------------ | ----------------- |
| integer to float   | `float(5){:python}`      | `5.0{:python}`    |
| float to integer   | `int(3.14){:python}`     | `3{:python}`      |
| integer to string  | `str(5){:python}`        | `"5"{:python}`    |
| string to float    | `float("2.1"){:python}`  | `2.1{:python}`    |
| Boolean to string  | `str(True){:python}`     | `"True"{:python}` |
| integer to Boolean | `bool(0){:python}`       | `False{:python}`  |
| integer to Boolean | `bool(1){:python}`       | `True{:python}`   |
| string to Boolean  | `bool("hello"){:python}` | `True{:python}`   |
| string to Boolean  | `bool(""){:python}`      | `False{:python}`  |

> [!info] Casting to Boolean
> In Python, casting a string to a Boolean returns `True{:python}` if the string is non-empty, regardless of its contents. Only the empty string (`""{:python}`) casts to `False{:python}`. 
> 
> Unintuitively, this means that `bool("False"){:python}` actually returns `True{:python}`.

## Non-examples

### Declare a variable
In languages where variables are [[declare|declared]], declaring a variable establishes its data type but does not change its data type—before declaration, there is no data type to change.

### Initialise a variable
[[initialise|Initialising]] a variable a value does not change its data type—before initialisation, there is no data type to change.

### Assign a variable a new value
In dynamically typed languages like Python, the data type of a variable can change. This means it is possible for a variable to have an initial value of one data type and for this value to be overwritten with a new value of a different data type. Manually overwriting a value—even if you change the data type—is not casting as casting requires the use of a casting function.

This is not an example of casting:
```python
x = 5
x = 5.0
```

## Specification links

### OCR J277
- [[specifications/ocr-j277/component-2/2-2/2-2-1|2.2.1 Programming fundamentals]]

### OCR H446
- [[specifications/ocr-h446/component-2/2-2/2-2-1|2.2.1 Programming techniques]]