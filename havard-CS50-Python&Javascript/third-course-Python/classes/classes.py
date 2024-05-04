class Flight():
    def __init__(self, capacity) -> None:
        self.capacity = capacity
        self.passengers = []

    def add_passenger(self, name) -> None:
        if not self.open_seats():
            return False
        self.passengers.append(name)
        return True

    def open_seats(self) -> None:
        return self.capacity - len(self.passengers)
