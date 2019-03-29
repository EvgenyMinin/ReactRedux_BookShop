import React from 'react';
import './BookItem.scss';

const BookItem = ({ book }) => {
    const { title, author, price, coverImage } = book;
    return (
        <div className='book-item'>
            <div className="book-item__book-cover">
                <img src={coverImage} alt="cover"/>
            </div>
            <div className="book-details">
                <a href="#" className='book-details__book-title' >{title}</a>
                <div className="book-details__book-author">{author}</div>
                <div className="book-details__book-price">${price}</div>
                <button className='btn btn-info'>Add to cart</button>
            </div>
        </div>
    );
}
 
export default BookItem;