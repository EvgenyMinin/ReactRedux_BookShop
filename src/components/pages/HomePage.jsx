import React from 'react';
import BookList from '../BookList';

const HomePage = () => {
    const books = [
        { id: 1, title: 'The Godfather', author: 'Mario Puzo' },
        { id: 2, title: 'The Sicilian', author: 'Mario Puzo' }
    ];
    return (
        <BookList books={books}/>
    );
};
 
export default HomePage;