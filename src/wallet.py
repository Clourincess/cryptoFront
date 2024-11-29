

class Wallet():
    """Класс кошелька с функцией отправки трансфера usdt trc20 в сеть tron"""
    from tronpy import Tron
    from tronpy.keys import PrivateKey
    from tronpy.providers import HTTPProvider

    def __init__(self, usdt_contract_adress: str = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t", sender_adress: str = "TSw4YLZKPfjogV7Q5HheFLYh4FrxSGbu9T", private_key_str: str = "BF166A31B6E23B47A7CF5D5E211295F648878B11FF4D6758A757112C67C7370B"):
        self.client = self.Tron(self.HTTPProvider(api_key="96c6fb66-fe0d-43e8-95a1-a9a651e8fc24"))
        self.usdt_contract_address = usdt_contract_adress
        self.sender_address = sender_adress
        self.private_key_str = private_key_str
        self.private_key = self.PrivateKey(bytes.fromhex(private_key_str))

    def create_transfer_contracts(self, recipient: str, amount: float | int = 10,) ->object | bool:
        """
        Создание и подписание смарт контракта на трансфер токенов, отправка его в сеть трон.

        :param recipient: Адрес TRON-кошелька получателя
        :param amount: Количество токенов
        :return: True или False ака операция прошла успешно или нет
        """
        recipient_address = recipient
        amount = amount * 10**6  #USDT имеет 6 десятичных знаков

        # Инициализация контракта
        usdt_contract = self.client.get_contract(self.usdt_contract_address)

        # Построение транзакции
        txn = (
            usdt_contract.functions.transfer(recipient_address, amount)
            .with_owner(self.sender_address)
            .fee_limit(1_000_000_000)
            .build()
            .sign(self.private_key)
        )

        # Отправка транзакции
        try:
            txn_hash = txn.broadcast().wait()
            return txn_hash
        except:
            return False

wallet = Wallet()
print(wallet.create_transfer_contracts('TDnoTALfAAaZ8zsXBaJFCBCHuHnCu5JVh9', 4 ))