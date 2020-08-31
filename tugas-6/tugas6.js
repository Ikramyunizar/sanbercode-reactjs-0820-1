// soal 1
let luas = jari_jari => {
    const pi = 3.14
    return console.log(jari_jari * jari_jari * 3.14);
}
let keliling = jari_jari => {
    const pi = 3.14
    return console.log(2 * pi * jari_jari);
}

luas(5);
keliling(10);

//soal 2 
let kalimat ="";

const tambahkalimat = katabaru => {
    kalimat += katabaru
    return `${kalimat}`;
}
tambahkalimat("saya ");
tambahkalimat("adalah ");
tambahkalimat("seorang ");
tambahkalimat("Frontend ");
tambahkalimat("Developer ");
console.log(kalimat);

//soal 3 
const newFunction = (firstName,lastName) => {
    return {firstName,lastName,
    fullName(){
        console.log(firstName + " " + lastName)
        return}
    }
}
  //Driver Code 
  newFunction("William", "Imoh")['fullName']()
  
//soal 4 
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }
console.log({firstName, lastName, destination, occupation, spell} = newObject);

//soal 5
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combine = [...west, ...east];
console.log(combine);
