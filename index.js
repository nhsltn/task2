// 1. Buatlah variable dengan "nama" lalu isi dengan nama lengkap anda 
const nama = "Nurul Huda Sulton Aulia";

// 2. Hitung panjang nama anda menggunakan metode length
let panjangNama = nama.length;

// 3. Ubah semua huruf dalam nama Anda menjadi huruf besar dan tampung di variable
const namaUpperCase = nama.toUpperCase();


// 5. Ambil huruf pertama dari variable "nama"
let hurufPertama = nama[0];

// 6. Ambil potongan nama anda, misalnya nama pertama anda
const potonganNama = nama.split(" ")[2];

// 7. Gabungkan potongan nama anda dengan string "Love Javascript"
let namaGabungan = potonganNama + " Love Javascript";

// 8. Print huruf terakhir dari variable "name"
const hurufTerakhir = nama[nama.length - 1];

// 9. Tampilkan hasil akhir dengan console.log()
console.log("-------Manipulasi String-------");
console.log("1. Panjang Nama:", panjangNama);
console.log("2. Nama Uppercase:", namaUpperCase);
console.log("3. Huruf Pertama:", hurufPertama);
console.log("5. Potongan Nama:", potonganNama);
console.log("6. Nama Gabungan:", namaGabungan);
console.log("7. Huruf Terakhir:", hurufTerakhir);

// MENGUBAH TIPE DATA

// 1. Buat variabel dengan nama umur dan isi dengan umur Anda dalam bentuk string
let umur = "25";

// 2. Ubah variabel umur menjadi tipe data number
const umurNumber = parseInt(umur);

// 3. Buat variabel dengan nama tinggi dan isi dengan tinggi Anda dalam bentuk string
let tinggi = "175.5";

// 4. Buatlah variable dengan "nama" lalu isi dengan nama lengkap anda 
const tinggiFloat = parseFloat(tinggi);

// Print Soal Mengubah Tipe Data
console.log("-------MENGUBAH TIPE DATA-------");
console.log("1. Umur dalam Number:", umurNumber);
console.log("2. Tinggi dalam Float:", tinggiFloat);

// PENGECEKAN TIPE DATA

// 1. Buat variabel dengan nama data dan isi dengan nilai apapun (string, number, boolean, dll.)
let dataName= "Sulton Tampan";

console.log("-------PENGECEKAN TIPE DATA-------");
console.log(dataName);
console.log("Tipe Data dari Variabel Diatas =", typeof dataName);

// NUMBER
// PENJUMLAHAN DAN PENGURANGAN
const num1 = 10;
const num2 = 5;
let hasilPenjumlahan = num1 + num2;
let hasilPengurangan = num1 - num2;
console.log("Hasil Penjumlahan:", hasilPenjumlahan);
console.log("Hasil Pengurangan:", hasilPengurangan);

// PERKALIAN DAN PEBAGIAN
let num3 = 6;
let num4 = 2;
let hasilPerkalian = num3 * num4;
let hasilPembagian = num3 / num4;
console.log("Hasil Perkalian:", hasilPerkalian);
console.log("Hasil Pembagian:", hasilPembagian);

// PANGKAT BILANGAN
let base = 3;
let exponent = 4;
let hasilPangkat = Math.pow(base, exponent);
console.log("Hasil Pangkat:", hasilPangkat);

// RATA-RATA DARI ARRAY
let numbers = [5, 8, 12, 4, 6];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
let rataRata = total / numbers.length;
console.log("Rata-rata:", rataRata);

// BILANGAN GANJIL ATAU GENAP
let num = 7;
if (num % 2 === 0) {
  console.log(num + " adalah bilangan genap.");
} else {
  console.log(num + " adalah bilangan ganjil.");
}

// RANDOM
let angkaRandom = Math.floor(Math.random() * 5) + 1;
console.log("Angka Random antara 1 dan 5:", angkaRandom);