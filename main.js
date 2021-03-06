// your code here
import Airplane from './Airplane.js'
import Flight from './Flight.js'
import Passenger from './Passenger.js'

// Part 1
let magic777 = new Airplane("Magic", "777", 150)
let maidenFlight = new Flight(
  "September 2",
  "10AM",
  "1PM",
  "Boston",
  "San Diego"
)

magic777.scheduleFlight(maidenFlight)
console.log(magic777)

// Part 2

// Part 3
let amelia = new Passenger('Amelia Earhart')
let ticket1 = amelia.purchaseTicket(maidenFlight, '6E')
console.log(ticket1)
console.log(amelia.flights)