import random 

string = "qwertyuoipasdfghjkl"
numbers = "1234567890"
operators = '%^&!#$'
chars = string+ numbers+operators
password = ""

for x in range(15):
  password += random.choice(chars)

print(password)
 
