import sqlite3
from lib import *

# Database
peopleDB = peopleDatabase()

if __name__ == "__main__":
    while True:
        print("Select an option:\n"
              "\033[1m1:\033[m Print table;\n"
              "\033[1m2:\033[m Add a new person;\n"
              "\033[1m0:\033[m Exit.")
        num = console(size=3)

        # print people
        if num == 1: peopleDB.printPeople()
        
        # Add a new person
        elif num == 2: peopleDB.addPerson()

        # Print birth year
        elif num == 3: peopleDB.printyear()

        # Exit
        elif num == 0: break
        
print('Bye, bye!')
