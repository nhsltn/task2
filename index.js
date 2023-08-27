// STRING
console.log("-------STRING-------");

// MANIPULASI STRING
console.log("-------MANIPULASI STRING-------");

// 1. Buatlah variable dengan "nama" lalu isi dengan nama lengkap anda 
const myName = "Nurul Huda Sulton Aulia";

// 2. Hitung panjang nama anda menggunakan metode length
let nameLength = myName.length;

// 3. Ubah semua huruf dalam nama Anda menjadi huruf besar dan tampung di variable
const nameUpperCase = myName.toUpperCase();

// 5. Ambil huruf pertama dari variable "nama"
let firstLetter = myName[0];

// 6. Ambil potongan nama anda, misalnya nama pertama anda
const nameToArray = myName.split(" ")[2];

// 7. Gabungkan potongan nama anda dengan string "Love Javascript"
let namePlusString = nameToArray + " Love Javascript";

// 8. Print huruf terakhir dari variable "name"
const lastLetter = myName[myName.length - 1];

// 9. Tampilkan hasil akhir dengan console.log()
console.log("1. Panjang Nama:", nameLength);
console.log("2. Nama Uppercase:", nameUpperCase);
console.log("3. Huruf Pertama:", firstLetter);
console.log("5. Potongan Nama:", nameToArray);
console.log("6. Nama Gabungan:", namePlusString);
console.log("7. Huruf Terakhir:", lastLetter);

// MENGUBAH TIPE DATA
console.log("-------MENGUBAH TIPE DATA-------");

// 1. Buat variabel dengan nama umur dan isi dengan umur Anda dalam bentuk string
let age = "25";

// 2. Ubah variabel umur menjadi tipe data number
const ageToInt = parseInt(age);

// 3. Buat variabel dengan nama tinggi dan isi dengan tinggi Anda dalam bentuk string
let height = "175.5";

// 4. Buatlah variable dengan "nama" lalu isi dengan nama lengkap anda 
const heighttoFloat = parseFloat(height);

// Print Soal Mengubah Tipe Data
console.log("1. Umur dalam Number:", ageToInt);
console.log("2. Tinggi dalam Float:", heighttoFloat);

// PENGECEKAN TIPE DATA
console.log("-------PENGECEKAN TIPE DATA-------");

// 1. Buat variabel dengan nama data dan isi dengan nilai apapun (string, number, boolean, dll.)
let dataName= "Sulton Tampan";

// 2. Print tipe data dari variabel data
console.log(dataName);
console.log("1. Tipe Data dari Variabel Diatas =", typeof dataName);

// NUMBER
console.log("-------NUMBER-------");

// PENJUMLAHAN DAN PENGURANGAN
console.log("-------PENJUMLAHAN DAN PENGURANGAN-------");

// 1. Buatlah sebuah variabel num1 dengan nilai 10 dan variabel num2 dengan nilai 5.
const num1 = 10;
const num2 = 5;

// 2. Hitung hasil penjumlahan dan pengurangan dari kedua angka tersebut.
let add = num1 + num2;
let reduction = num1 - num2;

// 3. Tampilkan hasil penjumlahan dan pengurangan dengan console.log.
console.log("1. Hasil Penjumlahan:", add);
console.log("2. Hasil Pengurangan:", reduction);

// PERKALIAN DAN PEBAGIAN
console.log("-------PERKALIAN DAN PEBAGIAN-------");

// 1. Buatlah sebuah variabel num3 dengan nilai 6 dan variabel num4 dengan nilai 2.
let num3 = 6;
let num4 = 2;

// 2. Hitung hasil penjumlahan dan pengurangan dari kedua angka tersebut.
let multiply = num3 * num4;
let divide = num3 / num4;

// 3. Tampilkan hasil penjumlahan dan pengurangan dengan console.log.
console.log("1. Hasil Perkalian:", multiply);
console.log("2. Hasil Pembagian:", divide);

// PANGKAT BILANGAN
console.log("-------PANGKAT BILANGAN------");

// 1. Buatlah sebuah variabel base dengan nilai 3 dan variabel exponent dengan nilai 4.
let base = 3;
let exponent = 4;

// 2. Hitung hasil dari pangkat base dipangkatkan exponent.
let cubed = Math.pow(base, exponent);

// 3. Tampilkan hasil pangkat dengan console.log.
console.log("Hasil Pangkat:", cubed);

// RATA-RATA DARI ARRAY
console.log("-------RATA-RATA DARI ARRAY------");

// 1. Buatlah sebuah array numbers yang berisi angka-angka: [5, 8, 12, 4, 6].
let numbers = [5, 8, 12, 4, 6];

// 2. Hitung rata-rata dari angka-angka di dalam array.
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
let rataRata = total / numbers.length;

// 3. Tampilkan hasil rata-rata dengan console.log.
console.log("Rata-rata:", rataRata);

// BILANGAN GANJIL ATAU GENAP
console.log("-------BILANGAN GANJIL ATAU GENAP------");

// 1. Buatlah sebuah variabel num dengan nilai 7.
let num = 7;

// 2. Gunakan kondisi if untuk mengecek apakah bilangan tersebut ganjil atau genap.
if (num % 2 === 0) {
  console.log(num + " adalah bilangan genap.");
} else {
  console.log(num + " adalah bilangan ganjil.");
}

// RANDOM
console.log("-------RANDOM------");
// 1. BUATKAN ANGKA RANDOM 1 SAMPAI 5
let angkaRandom = Math.floor(Math.random() * 5) + 1;
console.log("Angka Random antara 1 dan 5:", angkaRandom);