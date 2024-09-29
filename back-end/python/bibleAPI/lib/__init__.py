import requests
import json

API_URL = 'https://www.abibliadigital.com.br/api'

class bible():
    def __init__(self) -> None:
        pass

    def getChapter(self, book, chapter) -> list:
        res = requests.get(f'{API_URL}/verses/nvi/{book}/{chapter}')
        return res.json()["verses"]

    def getVersicle(self, book, chapter, versicle) -> None:
        pass
