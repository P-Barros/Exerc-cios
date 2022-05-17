








    

const booksByCategoty = [
    {
        category: "Riqueza",
        books: [ 
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                 title: "O homem mais rico da Babilônia",
                 author: "George S. Classon",
            },
            {
                title: "Pai rico, pai pobre",
                author:"Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
},
{
    category: "Inteligencia Emocional",
    books: [
        {
            title: "Você é insubstituível",
            author: "Augusto Cury",
        },
        {
            title: "Ansiedade - Como enfrentar o mal do século",
            author: "Augusto Cury",
        },
        {
            title: "Os 7 hábitos das pessoas altamente eficazes",
            author: "Stephen R. Covey",
        },
    ],
},
];

const totalCategories = booksByCategoty.length

console.log(totalCategories);
for(let category of booksByCategoty) {
    console.log("Total de livros da categoria: ", category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategoty) {
            for(let book of category.books){
                if(authors.indexOf(book.author) == -1)
                authors.push(book.author)
            }
    }   
    console.log("Total de autores: ", authors.length)         
}

countAuthors();

function booksOfAugustoCury() {
    let books = [];

    for(let category of booksByCategoty) {
            for(let book of category.books){
               if(book.author === 'Augusto Cury') {
                   books.push (book.title)
               }  
            }
    }   
    console.log("Livros do Autor: ", books)         
}
booksOfAugustoCury()