
// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

kataKedua = kataKedua.substr(0,1).toUpperCase() + kataKedua.substring(1)
kataKeempat = kataKeempat.toUpperCase();

console.log(kataPertama + " " + kataKedua + " " + kataKetiga + " " +  kataKeempat );

//soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

kataPertama = Number(kataPertama);
kataKedua = Number(kataKedua);
kataKetiga = Number(kataKetiga);
kataKeempat = Number(kataKeempat);


let jumlah = kataPertama + kataKedua + kataKetiga + kataKeempat 
console.log(jumlah);

//soal 3 

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14);
var kataKetiga = kalimat.substring(15,18);
var kataKeempat = kalimat.substring(19,24);
var kataKelima = kalimat.substring(25,31); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);


//soal 4
let nilai = 70;
let index;
if(nilai >=80){index = "A";}
else if (nilai < 80 && nilai >=70){index = "B"}
else if (nilai < 70 && nilai >=60){index = "C"}
else if (nilai < 60 && nilai >=50){index = "D"}
else if (nilai < 50 ){index = "E"}

console.log(index);

//soal 5 
var tanggal = 15;
var bulan = 6;
var tahun = 1998;

switch(bulan){
	case 1 :
	bulan = "Januari"
	break;

	case 2 :
	bulan = "Februari"
	break;

	case 3 :
	bulan = "Maret"
	break;

	case 4 :
	bulan = "April"
	break;

	case 5 :
	bulan = "Mei"
	break;

	case 6 :
	bulan = "Juni"
	break;

	case 7 :
	bulan = "Juli"
	break;

	case 8 :
	bulan = "Agustus"
	break;

	case 9 :
	bulan = "September"
	break;

	case 10 :
	bulan = "Oktober"
	break;

	case 11 :
	bulan = "November"
	break;

	case 6 :
	bulan = "Desember"
	break;

}

console.log(tanggal + " " + bulan + " " + tahun);
	





