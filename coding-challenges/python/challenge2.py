def diamond(num):
    if (num % 2 == 0 or num < 0):
        return None
    else:
        i = 1
        goingUp = True
        while i > 0:
            for x in range(int((num - i) / 2)):
                print(" ", end="")
            for x in range(i):
                print("*", end="")
            for x in range(int((num - i) / 2)):
                print(" ", end="")
            print("\n")
            if (i < num and goingUp):
                i += 2
            elif goingUp:
                goingUp = False
                i -= 2
            else:
                i -= 2


diamond(5)

# SOMEONE ELSES SOLN

# def diamond():

#     num = 9

#     for i in range(1, num+1):
#       i = i - (num//2 +1)
#       if i < 0:
#         i = -i
#       print(" " * i + "*" * (num - i*2) + " "*i)
# diamond()
