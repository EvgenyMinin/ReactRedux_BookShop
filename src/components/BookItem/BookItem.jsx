import React from 'react';
import './BookItem.scss';

const BookItem = ({ book }) => {
    const { title, author } = book;
    return (
        <React.Fragment>
            <span>{title}</span>
            <span>{author}</span>
        </React.Fragment>
    );
}
 
export default BookItem;