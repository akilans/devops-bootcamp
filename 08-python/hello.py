'''
name = "Alex" # string
age = 33 # int
height = 5.9 # float
in_bangalore = True # boolean
'''

name = input("Enter your name: ")
age = int(input("Enter your age: ")) # type casting from string to int

age_after_5_years = age + 5
print(age_after_5_years)

print(type(name))
print(type(age))
# type casting example
# 33  -> "33"
#print("Your name is " + name + ", you are " + str(age) + " years old")
print(f"Your name is {name}, you are {age} years old")


