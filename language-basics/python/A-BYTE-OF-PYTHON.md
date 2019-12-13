Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming. Python's elegant syntax and dynamic typing, together with its interpreted nature, make it an ideal language for scripting and rapid application development in many areas on most platforms.

### Features of Python

1. Simple: almost english-like pseudo code nature

2. High level language: no need to bother with low-level details such as managing memory etc.

3. Portable: Due to its open source nature, it has been ported to several platforms.

4. Interpreted: Doesn't need compilation to binary can be run directly from the source code.

5. Object oriented: program is built around objects which combine data and functionality.

6. Extensible: you can write a part of your code in C/C++ to improve performance

7. Extensive libraries and documentation

### Basics

#### Print

```py
# Print (Example for single line comment)

print("Hello Python")
```

#### Multi line strings

```py
a = """This is an example of multi line strings.
This is the second line.
And this, the third
"""
```

Strings are immutable.

#### format() method

```py
n1 = "Rick"
n2 = "Morty"

print('{0} and {1}'.format(n1, n2))
```

```py
# Shorthand syntax
n1 = "Rick"
n2 = "Morty"

print('{} and {}'.format(n1, n2))
```

#### f-strings

```py
n1 = "Rick"
n2 = "Morty"

print(f'{n1} and {n2}')
```

#### `end` param in print

```py
print('a', end=" ")
print('b', end="\n")
```

### Operators

```py
print(2+3)  # 5 (ADD)

print(2-3)  # -1 (SUBTRACT)

print(2*3)  # 6 (MULTIPLY)

print(2/3)  # 0.6666666666666666 (DIVIDE)

print(2**3)  # 8 (POWER)

print(5//3)  # 1 (DIVIDE AND FLOOR)

print(5 << 3)  # 40 (BITWISE LEFT SHIFT)

print(11 >> 1)  # 5 (BITWISE RIGHT SHIFT)

print(5 & 3)  # 1 (BITWISE AND)

print(5 | 3)  # 7 (BITWISE OR)

print(5 ^ 3)  # 6 (BITWISE XOR)

print(~5)  # -6 (BITWISE INVERT)
```

### Control Flow

#### if statement

```py
a = 5

if (a < 5):
    print('a is less than 5')
elif (a == 5):
    print('a is equal to 5')
else:
    print('a is greater than 5')
```

#### while statement

```py
num = 0

while (num < 10):
    print(f'Num is {num}')
    num += 1
```

#### for statement

```py
for i in range(1,5):
    print(i)
else:
    print('Exiting for loop')
```

#### break statement

```py
while True:
    s = input('Enter string: ')
    if s == 'quit':
        break
    print(f'You entered: {s}')
print('Done')
```

#### continue statement

```py
while True:
    s = input('Enter string: ')
    if s == 'quit':
        break
    elif len(s) <= 3:
        print('Enter more than 3 letters')
        continue
    print(f'You entered: {s}')
print('Done')
```

### Functions

#### Basic Function

```py
def say_hello():
    print('Hello Functions')


say_hello()
```

#### Function Parameters

```py
def max_and_sum(a, b):
    if a > b:
        print(f'{a} is greater than {b}')
    elif a < b:
        print(f'{b} is greater than {a}')
    else:
        print(f'{a} and {b} are equal')
    return a + b


print(f'Sum is {max_and_sum(2, 3)}')
```

#### Global Scoping

```py
x = 5


def func():
    global x
    print(f'x is {x}')  # 5
    x = 2
    print(f'x is {x}')  # 2


func()
print(f'x is {x}')  # 2
```

#### Default Argument Values

```py
def print_message(msg, times=1):
    print(msg * times)


print_message('hello')
print_message('world', 5)
```

#### Keyword Arguments

```py
def func(a, b=10, c=20):
    print(f'a is {a}, b is {b}, c is {c}')


func(3, 7)
func(25, c=24)
func(c=50, a=100)
```

#### VarArgs Parameters

```py
def func(a=5, *nums, **phonebook):
    print(f'a is {a}')

    for num in nums:
        print(f'Num is {num}')

    for key, val in phonebook.items():
        print(f'{key}: {val}')


func(10, 1, 2, 3, 4, 5)
func(10, A=1, B=2, C=3)
func(10, 1, 2, 3, A=1, B=2)
```

### Modules

#### sys module

```py
import sys

for i in sys.argv:
    print(i)

print(sys.path)
```

#### from ... import statement

```py
from math import sqrt

a = 16
print(f'Square root of {a} is {sqrt(a)}')
```

#### Import all

```py
from math import *

a = 16
print(f'Square root of {a} is {sqrt(a)}')
```

### Data structures

#### List

```py
fruits = ["mango", "banana", "apple"]

print('Number of fruits: ', len(fruits))

for fruit in fruits:
    print(fruit)

fruits.sort()

for fruit in fruits:
    print(fruit)
```

#### Tuple

```py
fruits = ('mango', 'banana', 'apple')

print('Number: ', len(fruits))  # 3

more_fruits = 'orange', 'grape', fruits

print(more_fruits[2][2])  # apple
```

#### Dictionaries

```py
mainCharacters = {
    'Rick': 'rick@adultswim.com',
    'Morty': 'morty@adultswim.com',
    'Summer': 'summer@adultswim.com',
    'Jerry': 'jerry@adultswim.com'
}

print('You can reach Rick at', mainCharacters['Rick'])

del mainCharacters['Jerry']

for name, email in mainCharacters.items():
    print(f'You can reach {name} at {email}')

mainCharacters['Beth'] = 'beth@adultswim.com'

if 'Beth' in mainCharacters:
    print('Beth is a main character')
```

#### Sets

```py
bric = set(['brazil', 'russia', 'india', 'china'])

print('india' in bric)  # True

brics = bric.copy()
brics.add('south africa')

print(brics.issuperset(bric))  # True

brics.remove('russia')

# intersection
print(bric & brics)  # {'india', 'china', 'brazil'}
```
