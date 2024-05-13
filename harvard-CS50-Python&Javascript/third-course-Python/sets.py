# Create an empty set
s = set() 

# Add some elements to set
for x in range(0, 4):
    s.add(x)

s.add(3)
s.remove(2)
print(s)

print(f"The set has {len(s)} elements.")
