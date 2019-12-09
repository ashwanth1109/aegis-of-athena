# You live in a city where all roads are laid out in a perfect grid. You have the unfortunate habit of arriving too early or too late to your appointments, so you decide to create a Walk Generating App.

# Any time you press the button, it will send you an array of one-letter strings representing directions to walk (eg. [‘n’,’s’,’w’,’e’]). You always walk only a single block in a direction. It takes one minute to traverse one city block.

# Create a program that will return an array of one-letter strings representing the walk. The program should accept input for the amount of time the user decides to walk and should bring the user back to their starting location.

from random import randrange

directions = ['n', 'w', 'e', 's']
length = len(directions)


def walk_generator(mins):
    if mins % 2 != 0:
        return "Needs to be even"
    else:
        path = []
        for i in range(int(mins/2)):
            rand_num = (randrange(length))
            path.insert(i, directions[rand_num])
            path.insert(mins - i, directions[length - 1 - rand_num])
        return path


print(walk_generator(10))
