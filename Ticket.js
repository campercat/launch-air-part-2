class Ticket {
  constructor(flight, passenger, seatNumber){
    this.flight = flight // flight will be an instance of the Flight class
    this.passenger = passenger // passenger will be an instance of the Passenger class
    this.seatNumber = seatNumber
  }
}

export default Ticket