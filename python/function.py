def greet():
    print("Hello, welcome to Python!")

greet()


def greet(name):
    print(f"Hello, {name}!")

greet("Abraham")

def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)
print(result)

def get_user_info():
    name = "Abraham"
    age = 20
    return name, age

n, a = get_user_info()
print(n, a)


def count_to(n):
    for i in range(1, n + 1):
        print(i)

count_to(5)


def check_even(num):
    if num % 2 == 0:
        return "Even"
    else:
        return "Odd"

print(check_even(7))