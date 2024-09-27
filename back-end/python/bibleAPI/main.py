import requests

## TODO: Organize everything with lib/__init__.py

capitulo = int(input('Digite um capítulo: '))

res = requests.get(f'https://www.abibliadigital.com.br/api/verses/nvi/gn/{capitulo}')
Genesis = res.json()["verses"]

if __name__ == '__main__':
    print(res.status_code)
    for i, k in enumerate(Genesis):
        print(f"\033[1;33m{i + 1}:\033[m {k['text']}")
