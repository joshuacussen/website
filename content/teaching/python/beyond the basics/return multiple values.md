---
title: Return multiple values
---

## What
Python provides nice [[syntax]] for ‘returning multiple values’. In reality, only one value is returned: a [[tuple]] containing all the specified values.

Python does not allow returning multiple values but its syntax gives the illusion of doing so:

- Python can return a tuple (parentheses optional)
- Syntax for multiple [[assign|assignments]] makes unpacking the tuple trivial

## Why
By ‘returning multiple values’ and using Python’s convenient syntax, you group return values without using or defining a complex [[data structure]]. This can make your code more readable.

## Examples
### Return an explicit tuple
We could similarly return a [[list]] or [[dictionary]].
```python
def division(dividend, divisor):
    quotient = dividend // divisor
    remainder = dividend % divisor
    return (quotient, remainder)

results = division(23, 5)  # results = (4, 3)
q, r = division(19, 2)  # q = 9, r = 1
```

### Return an implicit tuple
Python does not require parentheses around the grouped values being returned, it groups them in a tuple automatically.
```python
def division(dividend, divisor):
    quotient = dividend // divisor
    remainder = dividend % divisor
    return quotient, remainder

results = division(23, 5)  # results = (4, 3)
q, r = division(19, 2)  # q = 9, r = 1
```
## Things you should know
Grouping multiple return values in a tuple is not always sensible. Just because you can do it, doesn’t mean that you should.

When you start returning more than a couple of values, it’s probably time to think about using a more intentional data structure (e.g., a dictionary or a custom [[object]]) to better organise your data.