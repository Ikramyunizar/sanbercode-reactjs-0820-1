//soal 1
function halo() {
    console.log("Halo Sanbers");
}
halo()

//soal 2 
function kalikan(a , b ) {
    return a * b;
}
var num1 = 12
var num2 = 4
console.log(kalikan(num1, num2))


//soal 3
function introduce(nama, umur, alamat, hobi) {
    console.log(`Nama saya ${ nama }, umur saya ${umur}, alamat saya di ${alamat}, dan saya punya hobby ${hobi}`)
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)

//soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
let objectDaftarPeserta = {
    Nama : "Asep",
    Jeniskelamin : "Laki-laki",
    Hobby : "Baca Buku",
    Tahun : 1992
}
console.log(objectDaftarPeserta )
 
//soal 5
 let straw =  {nama: "strawberry",
  warna: "merah",
  adabijinya: "tidak",
  harga: 9000 }
 let orange = {nama: "jeruk",
  warna: "oranye",
  adabijinya: "ada",
  harga: 8000
}
 let semangka = {nama: "Semangka",
  warna:" Hijau & Merah",
  adabijinya: "ada",
  harga: 10000}
 let banana =  {nama: "Pisang",
  warna: "Kuning",
  adabijinya: "tidak",
  harga: 5000}
  
  let arraybuah = [straw, orange, semangka, banana];
  console.log(arraybuah[0])

//soal 6   
let dataFilm = [];
function pushfilm(name, duration, genres, year) {
    let filmobject = {
        nama : name,
        durasi : duration,
        genre : genres,
        tahun : year
    }
    dataFilm.push(filmobject);
}
pushfilm("IT", 120, "horror", 1990)
console.log(dataFilm)