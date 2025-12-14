'''
friend_1 = "Alex"
friend_1 = "Kumar"
friend_3 = "John"
'''

friends = ["Alex", "Kumar", "John", "Sara"] # list
print(friends[0]) # Alex
print(friends[1]) # Kumar
print(friends[2]) # John
print(friends[3]) # Sara

friends.append("Akilan")
print(friends)
friends.remove("Kumar")

'''
friend_name = "Akilan"
friend_age = 25
friend_location = "Chennai"
'''

# dictionary
friend = {
    "name": "Akilan",
    "age": 25,
    "location": "Chennai",
    "is_student": True,
    "favorite_subjects": ["Maths", "Science", "English"]
}

print(friend["favorite_subjects"][1])   # Science


print(f"My friend location is -{friend['location']}")

# list of dictionaries
friends = [
    {"name": "Alex", "age": 30, "location": "Bangalore"}, #0
    {"name": "Kumar", "age": 28, "location": "Chennai"}, #1
    {"name": "John", "age": 32, "location": "Mumbai"} #2
] 

print(friends[2]["location"])


# You can't change me -> tuple
my_favorite_numbers = (3, 6) # tuple [3, 6]
#my_favorite_numbers.append(9) # AttributeError: 'tuple' object has no attribute 'append'

# set
my_places = {"Bangalore", "Chennai", "Mumbai", "Bangalore"}
print(my_places) # {'Chennai', 'Mumbai', 'Bangalore'}