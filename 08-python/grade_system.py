mark = int(input("Enter your mark (0-100): "))

if mark >=0 and mark < 35:
    print("You have failed the exam.")
elif mark >= 35 and mark < 50:
    print("You have passed the exam.")
elif mark >= 50 and mark < 75:
    print("You have scored a first class.")
elif mark >= 75 and mark <= 100:
    print("You have scored a distinction.")
else:
    print("Invalid mark entered.")