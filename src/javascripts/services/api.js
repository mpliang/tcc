'use strict';

app.service('api', () => {

  this.configs = () => ['Config A', 'Config B', 'Config C', 'Not Sure']
  this.models = () => ['Model A', 'Model B', 'Model C'];
  this.makes = () => ["AM General", "Acura", "Alfa Romeo", "Aston Martin", "Audi", "BMW", "Bentley", "Bugatti", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Daewoo", "Dodge", "Eagle", "FIAT", "Ferrari", "Fisker", "Ford", "GMC", "Genesis", "Geo", "HUMMER", "Honda", "Hyundai", "Infiniti", "Isuzu", "Jaguar", "Jeep", "Kia", "Lamborghini", "Land Rover", "Lexus", "Lincoln", "Lotus", "MINI", "Maserati", "Maybach", "Mazda", "McLaren", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Panoz", "Plymouth", "Pontiac", "Porsche", "Ram", "Rolls-Royce", "Saab", "Saturn", "Scion", "Smart", "Spyker", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen", "Volvo"];

  this.years = () => getYears();

  function getYears() {
    let years = [];
    for (let i = 2016; i >= 1985; i--) {
      years.push(i);
    }
    return years;
  }

});
