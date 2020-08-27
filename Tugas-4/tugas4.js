//soal 1 

let loop1 = 2
let loop2 = 20

while (loop1 <= 20) {
    console.log(loop1 + " - I Love Coding");
    loop1 += 2
}

while (loop2 > 0) {
    console.log(loop2 + " - I Will Become a Frontend Developer");
    loop2 = loop2 - 2;
}

//soal 2 
for( let i = 1; i<20; i++ ){
    if (i % 2 == 1  && i % 3 == 0) {
        console.log(i + " I Love Coding");
    }
    else if (i % 2 == 1){
        console.log(i + " - Santai");

    }
    else if(i % 2 == 0 ){
        console.log(i + " - Berkualitas");
    }

}


//soal 3 
let hashtag = "#"
for( let j = 1; j<8; j++){
    
    console.log(hashtag.repeat(j));
}
//soal 4
let kalimat = "Saya sangat senang belajar javascript";
let arrayKalimat = kalimat.split(" ");
console.log(arrayKalimat);

//soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();

for (i of daftarBuah){
    console.log(i);
}