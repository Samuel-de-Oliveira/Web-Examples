from lib import *

# Load config
theBible = bible() 
conf = config()

if __name__ == '__main__':
    print('loading...', end='\r')
    genesisOne = theBible.getChapter('gn', 20)
    revelationsFinal = theBible.getVersicle('re', 22, 21)
    for i, k in enumerate(genesisOne):
        print(f"\033[1;33m{i + 1}:\033[m {k['text']}")

    print(f"\nThe last versicle in the bible is: \"{revelationsFinal}\"")
