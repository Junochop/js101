// how to define an object
 var x = "humidity";
var weather = {
currentTemp: 82,
isRaining: false,
huminity: "too much",
'is-sunny': true

};

console.log(weather);


//assigning a property to an object
weather.location ="Nashville";
wether['zipCode'] = 37212;

console.log(weather);

console.log("humidity", weather[x]);
console.log(weather.x) //undefined