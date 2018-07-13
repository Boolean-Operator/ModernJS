let restaurant = {
  name: 'Bistro Grill',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function(partySize){
    let seatsLeft = this.guestCapacity - this.guestCount;
    console.log(`Guest Count: ${this.guestCount}`);
    
    return partySize <= seatsLeft
  },
  seatParty: function(partySize) {
    this.guestCount = this.guestCount + partySize;
    console.log(`Guest Count: ${this.guestCount}`);
  },
  removeParty: function(partySize) {
    this.guestCount = this.guestCount - partySize
    console.log(`Guest Count: ${this.guestCount}`);
  }
}

restaurant.seatParty(10)
restaurant.seatParty(10)
restaurant.seatParty(20)
restaurant.seatParty(12)
restaurant.seatParty(15)
restaurant.seatParty(6)
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4));

