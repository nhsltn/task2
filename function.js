// STRING
console.log("-------STRING-------");

// MANIPULASI STRING
console.log("-------MANIPULASI STRING-------");

// 1. Buatlah variable dengan "nama" lalu isi dengan nama lengkap anda 
const myName = "Nurul Huda Sulton Aulia";

// 2. Hitung panjang nama anda menggunakan metode length
function nameLength(name) {
    return name.length;
}

// 3. Ubah semua huruf dalam nama Anda menjadi huruf besar dan tampung di variable
function nameUpperCase(name) {
    return name.toUpperCase();
}

// 5. Ambil huruf pertama dari variable "nama"
function firstLetter(name) {
    return name[0];
}
// 6. Ambil potongan nama anda, misalnya nama pertama anda
function nameToArray(name) {
    return name.split(" ")[2];
}

// 7. Gabungkan potongan nama anda dengan string "Love Javascript"
function namePlusString(name) {
    let arrayName = name.split(" ")[2];
    return arrayName + " Love Javascript"
}

// 8. Print huruf terakhir dari variable "name"
function lastLetter(name) {
    return name[name.length - 1]
}

// 9. Tampilkan hasil akhir dengan console.log()
console.log("1. Panjang Nama:", nameLength(myName));
console.log("2. Nama Uppercase:", nameUpperCase(myName));
console.log("3. Huruf Pertama:", firstLetter(myName));
console.log("5. Potongan Nama:", nameToArray(myName));
console.log("6. Nama Gabungan:", namePlusString(myName));
console.log("7. Huruf Terakhir:", lastLetter(myName));

// MENGUBAH TIPE DATA
console.log("-------MENGUBAH TIPE DATA-------");

// 1. Buat variabel dengan nama umur dan isi dengan umur Anda dalam bentuk string
const age = "25";

// 2. Ubah variabel umur menjadi tipe data number
function ageToInt(age) {
     return parseInt(age)
}

// 3. Buat variabel dengan nama tinggi dan isi dengan tinggi Anda dalam bentuk string
const height = "175.5";

// 4. Ubah variabel height menjadi tipe data float
function heightToFloat(height) {
    return parseFloat(height);
  }

// Print Soal Mengubah Tipe Data
const ageInNumber = ageToInt(age);
const ageDataType = typeof ageInNumber;
console.log(
    "1. Umur dalam Number:", ageInNumber,
    ", dan tipe data dari variable tersebut adalah:", ageDataType
  );

const heightInFloat = heightToFloat(height);
const heightDataType = typeof heightInFloat;
console.log(
    "2. Tinggi dalam Float:", heightInFloat,
    ", dan tipe data dari variable tersebut adalah:", heightDataType
);

// PENGECEKAN TIPE DATA
console.log("-------PENGECEKAN TIPE DATA-------");

// 1. Buat variabel dengan nama data dan isi dengan nilai apapun (string, number, boolean, dll.)
let dataName= "Sulton Tampan";

// 2. Print tipe data dari variabel data
function printDataName(value) {
    // console.log("1. Tipe Data dari Variabel Diatas =", typeof value);
    return typeof value
}
console.log("1. Tipe Data dari Variabel Diatas =", printDataName(dataName));


// NUMBER
console.log("-------NUMBER-------");

// PENJUMLAHAN DAN PENGURANGAN
console.log("-------PENJUMLAHAN DAN PENGURANGAN-------");

// 1. Buatlah sebuah variabel num1 dengan nilai 10 dan variabel num2 dengan nilai 5.
const num1 = 10;
const num2 = 5;

// 2. Hitung hasil penjumlahan dan pengurangan dari kedua angka tersebut.
function add(x,y) {
    return x + y;
}
function reduction(x,y) {
    return reduction = x - y;
}

// 3. Tampilkan hasil penjumlahan dan pengurangan dengan console.log.
console.log("1. Hasil Penjumlahan:", add(num1, num2));
console.log("2. Hasil Pengurangan:", reduction(num1, num2));

// PERKALIAN DAN PEBAGIAN
console.log("-------PERKALIAN DAN PEBAGIAN-------");

// 1. Buatlah sebuah variabel num3 dengan nilai 6 dan variabel num4 dengan nilai 2.
let num3 = 6;
let num4 = 2;

// 2. Hitung hasil penjumlahan dan pengurangan dari kedua angka tersebut.
function multiply(x,y) {
    return x * y;
}
function divide(x,y) {
    return reduction = x / y;
}
// 3. Tampilkan hasil penjumlahan dan pengurangan dengan console.log.
console.log("1. Hasil Perkalian:", multiply(num3,num4));
console.log("2. Hasil Pembagian:", divide(num3,num4));

// PANGKAT BILANGAN
console.log("-------PANGKAT BILANGAN------");

// 1. Buatlah sebuah variabel base dengan nilai 3 dan variabel exponent dengan nilai 4.
let base = 3;
let exponent = 4;

// 2. Hitung hasil dari pangkat base dipangkatkan exponent.
function cubed(x,y) {
    return Math.pow(x,y)
}

// 3. Tampilkan hasil pangkat dengan console.log.
console.log("Hasil Pangkat:", cubed(base,exponent));

// RATA-RATA DARI ARRAY
console.log("-------RATA-RATA DARI ARRAY------");

// 1. Buatlah sebuah array numbers yang berisi angka-angka: [5, 8, 12, 4, 6].
let numbers = [5, 8, 12, 4, 6];

// 2. Hitung rata-rata dari angka-angka di dalam array.
function average(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
  }
    return total / array.length;
}
// 3. Tampilkan hasil rata-rata dengan console.log.
console.log("Rata-rata:", average(numbers));

// BILANGAN GANJIL ATAU GENAP
console.log("-------BILANGAN GANJIL ATAU GENAP------");

// 1. Buatlah sebuah variabel num dengan nilai 7.
let num = 7;

// 2. Gunakan kondisi if untuk mengecek apakah bilangan tersebut ganjil atau genap.
function oddOrEven(number) {
    if (number % 2 === 0) {
        return "Genap"
      } else {
        return "Ganjil"
      }
}

console.log(num + " adalah angka : " + oddOrEven(num));

// RANDOM
console.log("-------RANDOM------");
// 1. BUATKAN ANGKA RANDOM 1 SAMPAI 5
function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
  }

const randomNum = generateRandomNumber();
console.log("Angka acak antara 1 dan 5:", randomNum);

// Fungsi untuk mengonversi Celsius ke Fahrenheit
console.log("-------2. Konversi Celsius ke Fahrenheit:------:");

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

const celsiusTemperature = 54;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log("Suhu dalam Fahrenheit:", fahrenheitTemperature);

// Fungsi untuk melakukan perhitungan pangkat
console.log("-------3. Pangkat Sederhana:------:");
  function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

const baseNumber = 2;
const exponentNumber = 3;
const resultPower = calculatePower(baseNumber, exponentNumber);
console.log("Hasil pangkat:", resultPower);

// Fungsi untuk mengecek huruf vokal
console.log("-------4. Cek Huruf Vokal:------:");
function checkVowel(letter) {
    const vowelPattern = /^[aeiou]$/i; // Pattern untuk huruf vokal (case insensitive)
    if (vowelPattern.test(letter)) {
      return "Vokal";
    } else {
      return "Bukan Vokal";
    }
  }

const letterToCheck = 'B';
const vowelStatus = checkVowel(letterToCheck);
console.log("Status huruf:", vowelStatus);


  
  
  
