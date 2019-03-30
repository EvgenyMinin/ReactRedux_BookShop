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
                <label className='book-details__book-title' >{title}</label>
                <p className="book-details__book-author">{author}</p>
                <p className="book-details__book-price">${price}</p>
                <button className='btn btn-info'>Add to cart</button>
            </div>
        </div>
    );
}
 
export default BookItem;