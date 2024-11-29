import requests
import datetime
from wallet import Wallet


def get_tron_transactions(address: str = 'TSw4YLZKPfjogV7Q5HheFLYh4FrxSGbu9T', limit: int = 50, direction=2) -> list[dict]:
    """
    Получить последние транзакции для TRON-кошелька по указанному адресу.

    :param address: Адрес TRON-кошелька
    :param limit: Количество последних транзакций
    :param direction: Направление трансфера. 1 - исходящие, 2 - входящие, 0 - оба  
    :return: Список транзакций

    """
    now = datetime.datetime.now()
    one_hour_ago = now - datetime.timedelta(hours=24)
    timestamp = one_hour_ago.timestamp()

    url = f'https://apilist.tronscanapi.com/api/transfer/trc20?address={address}&trc20Id=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&direction={direction}&limit={limit}'

    response = requests.get(url)
    if response.status_code == 200:
        transactions = response.json().get('data', [])
        return transactions
    else:
        print(f"Ошибка: {response.status_code}")
        return False


def check_income(sender_wallet: str, amount: int, service_wallet: str = 'TSw4YLZKPfjogV7Q5HheFLYh4FrxSGbu9T') -> bool:
    """
    Проверка определенной транзакции.

    :param sender_wallet: Адрес TRON-кошелька отправителя
    :param amount: Количество ожидаемых токенов
    :param service_wallet: Адрес кошелька нашего
    :return: True или False

    """
    last_transactions = get_tron_transactions()
    if last_transactions:

        succesful_transfers = [[transaction['amount'], transaction['from']]
                               for transaction in last_transactions if 'amount' in transaction.keys() and transaction['contract_ret'] == 'SUCCESS']

        check_status = False
        if [str(amount), sender_wallet] in succesful_transfers:
            check_status = True
        return check_status
    
    return False


#Пример использования класса Wallet для отправки средств
def send_example():
    wallet = Wallet()
    send_status = wallet.create_transfer_contracts("получатель", 1000)
    if send_status:
        print("успешная отправка")
    else:
        print("неуспешная отправка")


print(get_tron_transactions())