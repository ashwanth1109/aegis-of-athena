# https://dev.to/thepracticaldev/daily-challenge-3-vowel-counter-34ni


def func1(str):
    vowels = ["a", "e", "i", "o", "u"]
    vowelCount = 0

    def isVowel(ch):
        return ch in vowels or ch.lower() in vowels

    for ch in str:
        if (isVowel(ch)):
            vowelCount += 1

    return vowelCount


ans = func1("hEllo python 2")

print(ans)
