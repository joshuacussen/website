---
title: Conventions
aliases:
- Conventions
---
## General programming
### Python-first
Assume all code examples are Python unless stated otherwise. I use other programming languages to demonstrate functionality and syntax that Python either doesn't do or does poorly.

## Object-oriented programming
The following conventions are to align my code with [[specifications/ocr-h446/index|OCR H446]] mark scheme expectations.

### Dunder for private
I use two underscores to show that an [[attribute]] or [[method]] is [[private]], e.g., `self.__balance = 0{:python}`.

### p_parameter
I prefix [[parameter]] identifiers with `p_` to clearly signal the difference between parameters and [[attribute|attributes]].
