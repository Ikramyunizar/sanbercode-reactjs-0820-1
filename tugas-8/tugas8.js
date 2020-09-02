//soal 1

var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
let pengurangan_waktu = (book, waktu ) => {
readBooks(waktu, books[book], (waktu) => {
    if (waktu > 0){
    if (book + 1 < books.length){
        pengurangan_waktu(book + 1, waktu)
    } }
} 
)}

pengurangan_waktu(0,10000)