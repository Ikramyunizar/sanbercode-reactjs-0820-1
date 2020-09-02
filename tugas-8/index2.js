var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
let promisebook = (book, waktu) =>{
    readBooksPromise(waktu, books[book])
    .then((waktusisa) => { if(waktusisa > 0) {
        if (book + 1 < books.length){
            promisebook(book+1 , waktu  )}
        }
    })        
}

promisebook(0,10000);