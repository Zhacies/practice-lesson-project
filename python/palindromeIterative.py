import re

cleaned_str = "raciicar"
cleaned_str1 = re.sub(r'[^a-z0-9]', '', cleaned_str.lower())
left = 0
right = len(cleaned_str1)-1
print(cleaned_str1)

while left<right:
  if cleaned_str1[left] != cleaned_str1[right]:
    print(False)
    
  left+= 1
  right-=1

print(True)