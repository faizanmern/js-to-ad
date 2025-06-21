// var num1 = 10;
// var num2 = 20;
// function addNumbers(a, b) {
//     return a + b;
// }
// function main() {
//     var result = addNumbers(num1, num2);
//     console.log("The sum of " + num1 + " and " + num2 + " is: " + result);
// }
// main();     

// var num = 2
// var num2 = 30.90

// console.log(typeof (num))
// console.log(typeof (num2))

// var str = "Hello, World!"
// var str2 = "JavaScript is fun!"

// console.log(typeof (str))
// console.log(typeof (str2))

// console.log(parseFloat(num2))

// if (4 > 5) {
//     console.log("4 is less than 5")
// } else {
//     console.log("4 is not less than 5")
// }

// if (5 === '5') {
//     console.log(true)
// } else {
//     console.log(false)
// }

// if (5 != 4) {
//     console.log("5 is not equal to 4")
// }
// else {
//     console.log("5 is equal to 4")
// }
// if (5 !== '5') {
//     console.log("5 is not strictly equal to '5'")
// }
// else {
//     console.log("5 is strictly equal to '5'")
// }
// if (5 > 4) {
//     console.log("5 is greater than 4")
// }

var mCar = {
    "company": "Corolla",
    "model": "2007",
    "NumberPlate": "ANK369",
    "color": "off White",
    "EngineCapacity": "1100cc",
    "isAutomatic": false,
    "features": ["Air Conditioning", "Power Steering", "Anti-lock Braking System"]
}

// console.log(typeof (mCar));

var mCar2 = {
    name: "Toyota",
    manufacturer: {
        name: "Toyota Motor Corporation",
        country: "Japan"
    },
    topSpeed: 180,
    features: ["Cruise Control", "Leather Seats", "Bluetooth Connectivity"],
    colors: "Red",
    applybreaks: function () {
        setTimeout(function () {
            console.log("Applying breaks after 2 seconds CAR STOPPED ");
        }
        ), 5000
    }
}
console.log(mCar2);

console.log(mCar2.applybreaks());