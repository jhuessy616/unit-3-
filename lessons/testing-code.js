let alice = {
  name: 'Alice Abrams',
  homeAddress: {
    street: '12 Maple St.',
    location: {
      latitude: 44.4759,
      longitude: -73.2121
    }
  },
  pets: ['Mittens', 'Fido']
}
console.log(alice.homeAddress.location.latitude);

console.log(alice["homeAddress"]["location"]["latitude"]);