import sqlite3

# Console function
def console(size=3, text='>>: ') -> int:
    while True:
        try:
            num = int(input(text))

            if num > size: print(f'\033[1;31mPlease digi a value lower than {size}!\033[m')
            elif not num < 0: return num
            else: print('\033[1;31mPlease digit not negative number!\033[m')

        except KeyboardInterrupt: exit()
        except: print('\033[1;31mPlease try a valid value!\033[m')

# Main database class
class peopleDatabase():
    def __init__(self) -> None:
        self.people = sqlite3.connect('people.sql')
        self.curPeople = self.people.cursor()

    def printPeople(self) -> None:
        getPeople = self.curPeople.execute('SELECT * FROM People;')
        print(getPeople.fetchall())
        self.people.commit()

    def addPerson(self) -> None:
        Name = str(input('Digit the person\'s Name: '))
        Age  = int(input('Now the Age: '))

        addPeople = self.curPeople.execute(
            f"INSERT INTO People (Name, Age) VALUES ('{Name}', {Age});"
        )
        self.people.commit()
