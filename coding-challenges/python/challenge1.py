# Your goal is to create a function that removes the first and last letters of a string.
# Strings with two characters or less are considered invalid.
# You can choose to have your function return null or simply ignore.


def func1(str):
    if len(str) < 3:
        return None
    else:
        return str[1:len(str)-1]


ans = func1("python")
print(ans)
