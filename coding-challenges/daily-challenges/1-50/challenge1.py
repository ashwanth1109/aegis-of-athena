# print("Hello python")

# https://dev.to/thepracticaldev/daily-challenge-1-string-peeler-4nep

# Your goal is to create a function that removes the first and last letters of a string. Strings with two characters or less are considered invalid. You can choose to have your function return null or simply ignore.

def remove_first_last(str):
  if (not (str is None)) and (len(str) > 2):
    return str[1:len(str)-1]
  else: 
    return None

# TEST CASES

testArr = [
  "Hello",
  None,
  "Hi",
  "Hello world"
]

for item in testArr:
  print(remove_first_last(item))
