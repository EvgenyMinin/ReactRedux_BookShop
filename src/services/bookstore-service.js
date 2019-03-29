class BookstoreService {
    getBooks() {
        return [
            { 
                id: 1,
                title: 'The Godfather',
                author: 'Mario Puzo',
                price: 35,
                coverImage: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
            },
            { 
                id: 2,
                title: 'Omerta',
                author: 'Mario Puzo',
                price: 29,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/71uB0%2BRd1SL.jpg'
            }
        ];      
    }
};

export default BookstoreService;