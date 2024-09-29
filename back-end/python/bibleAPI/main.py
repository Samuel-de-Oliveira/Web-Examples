from lib import *

theBible = bible() 

if __name__ == '__main__':
    genesisOne = theBible.getChapter('gn', 20)
    for i, k in enumerate(genesisOne):
        print(f"\033[1;33m{i + 1}:\033[m {k['text']}")
