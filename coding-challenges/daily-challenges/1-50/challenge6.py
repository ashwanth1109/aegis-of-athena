
# https://www.codewars.com/kata/help-your-granny/javascript

import math

friends1 = ["A1", "A2", "A3", "A4", "A5"]
fTowns1 = [["A1", "X1"], ["A2", "X2"], ["A3", "X3"], ["A4", "X4"]]
distTable1 = {"X1": 100.0, "X2": 200.0, "X3": 250.0, "X4": 300.0}


def tour(friends, friend_towns, home_to_town_distances):
    def getPythagorasSide(a, c):
        return round(math.sqrt(((math.pow(c, 2)) - (math.pow(a, 2)))))
    totalDistance = 0.0
    prevDistance = 0.0
    for friend in friends:
        for friendAndTown in friend_towns:
            if friendAndTown[0] == friend:
                if (prevDistance == 0.0):
                    totalDistance += home_to_town_distances[friendAndTown[1]]
                else:
                    totalDistance += getPythagorasSide(
                        prevDistance, home_to_town_distances[friendAndTown[1]])
                prevDistance = home_to_town_distances[friendAndTown[1]]
    return round(totalDistance + prevDistance)


print(tour(friends1, fTowns1, distTable1))
