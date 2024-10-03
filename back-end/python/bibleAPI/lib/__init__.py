import requests
import json

# API URL
API_URL = 'https://www.abibliadigital.com.br/api'

# TODO: Finish this part of the project
# Config and settings
class config():
    def __init__(self) -> None:
        with open('config.json', 'r+') as file:
            localData = file.read()
            self.data = json.loads(localData)

    def save(self) -> None:
        with open('config.json', 'w+') as file:
            file.write(json.dumps(self.data, indent=True))


# bible object
class bible():
    def __init__(self) -> None:
        self.bibleConfig = config()

    def getChapter(self, book, chapter) -> list:
        localVersion = self.bibleConfig.data
        res = requests.get(f'{API_URL}/verses/{localVersion["version"]}/{book}/{chapter}')
        return res.json()["verses"]

    def getVersicle(self, book, chapter, versicle) -> str:
        localVersion = self.bibleConfig.data
        res = requests.get(f'{API_URL}/verses/{localVersion["version"]}/{book}/{chapter}/{versicle}')
        return res.json()["text"]


# "Loading..." Text
def loading() -> None:
    print('Loading...', end='\r')
    print('          ', end='\r')
