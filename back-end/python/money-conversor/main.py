from lib import *
import json

print('Loading...', end='\r')

GCI = getCoinInfo('USD', 'BRL')
Coin_Information = GCI.json()["USDBRL"]

if __name__ == "__main__":
    print(
        f'100.00U$ is equivalent to {100 * float(Coin_Information["high"])}R$'
    )

    if float(Coin_Information["high"]) >= 5: print('It\'s much expensive!')
    else: print('Its cheap!')
