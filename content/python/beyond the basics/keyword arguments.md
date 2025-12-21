---
title: Keyword arguments
---
## What
Keyword arguments explicitly match [[argument|arguments]] to [[parameter|parameters]] using the parameters’ [[identifier|identifiers]].

## Why
Using keyword arguments makes longer [[function]] calls more readable by explicitly naming the parameters and [[assign|assigning]] their values.

Additionally, keyword arguments match by identifier rather than position. Keyword arguments do not change whether an argument is required or not, they just give flexibility with the ordering of arguments when writing subprogram calls.

The flexibility of ordering enabled by keyword arguments is extremely helpful when using [[default parameters|default parameters]] as it allows their use irrespective of position.

## Examples
### Ordering parameters
If you use keyword arguments for all the arguments in the subprogram call, the order does not matter at all.
```python {5-6}
def create_username(forename, surname, year):
    username = f"{forename[0]}{surname}{year[2:]}"
    return username

user = create_username(forename="Jon", surname="Hamm", year="2025")  # JHamm25
user2 = create_username(year="2023", forename="Quintin", surname="Bacon")  # QBacon23
```

### Default parameters
Keyword arguments are useful and improve readability when using [[default parameters|default parameters]].
```python {5}
def create_username(forename, surname, year="2025"):
    username = f"{forename[0]}{surname}{year[2:]}"
    return username

user = create_username("Frances", "Ford", year="2021")  # FFord21
```