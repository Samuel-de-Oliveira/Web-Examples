import requests

URL = 'https://economia.awesomeapi.com.br/last'

class getCoinInfo():
    def __init__(self, inCoin, outCoin) -> None:
        self.res = requests.get(f'{URL}/{inCoin}-{outCoin}')

        if self.res:
            self.status  = self.res.status_code
            self.headers = self.res.headers
            self.json    = self.res.json
        else:
            print(f'You got an error: {self.res}')
