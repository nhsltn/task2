// 1. Rubah function calculator menjadi arrow function
const calculator = (operation, a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return "Input harus berupa angka";
  }

  if (operation === "add") {
    return a + b;
  } else if (operation === "subtract") {
    return a - b;
  } else if (operation === "multiply") {
    return a * b;
  } else if (operation === "divide") {
    return a / b;
  } else if (operation === "power") {
    return Math.pow(a, b);
  } else {
    ("Operasi tidak valid");
  }
};

let awd = "sulton"; //untuk testing validasi
let test = 5;
let test1 = 2;

console.log("Penjumlahan:", calculator("add", awd, test1));
console.log("Penjumlahan:", calculator("add", test, test1));
console.log("Pengurangan:", calculator("subtract", test, test1));
console.log("Perkalian:", calculator("multiply", test, test1));
console.log("Pembagian:", calculator("divide", test, test1));
console.log("Pangkat:", calculator("power", test, test1));

// 2. Rubah function Konversi Celsius ke Fahrenheit menjadi arrow function dan currying

// Arrow Function
const celsiusToFahrenheit = (celcius) => (celcius * 9) / 5 + 32;

const req = 1.8; // 9/32
const req1 = 32;

const celsiusToFahrenheitCurried = (celcius) => {
  return function (x) {
    return function (y) {
      return celcius * x + y;
    };
  };
};
console.log(celsiusToFahrenheitCurried(70)(req)(req1));

console.log(celsiusToFahrenheit(70));

/*
Function Lama
function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
*/
