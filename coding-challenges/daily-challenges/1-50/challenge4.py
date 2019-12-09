# You are given a small checkbook to balance that is given to you as a string. Sometimes, this checkbook will be cluttered by non-alphanumeric characters.

# The first line shows the original balance. Each other (not blank) line gives information: check number, category, and check amount.

# You need to clean the lines first, keeping only letters, digits, dots, and spaces. Next, return the report as a string. On each line of the report, you have to add the new balance. In the last two lines, return the total expenses and average expense. Round your results to two decimal places.

import re

input1 = """
1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10
"""

input2 = """
1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tires;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;
"""

def clean_line(string):
  return re.sub('[^A-Za-z0-9. \n]+', '', string)

def convert_to_float(string):
  return float("{0:.2f}".format(float(string)))

def float_to_string(val):
  return "{0:.2f}".format(val)

def main_func(string):
  lines = clean_line(string).split("\n")
  final_str = ""
  balance = 0
  total_exp = 0
  count = 0
  for idx, line in enumerate(lines):
    if line:
      if final_str == "":
        final_str += "Original_Balance: " + line + "\n"
        balance = convert_to_float(line)
      else:
        current = convert_to_float(line.split(" ")[2])
        balance = convert_to_float(balance - current)
        total_exp += current
        count += 1
        final_str += line + " Balance " + float_to_string(balance) + "\n"
  return final_str + "Total expense " + float_to_string(total_exp) + "\n" + "Average expense " + float_to_string(total_exp / count)

print(main_func(input1))