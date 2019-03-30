import React, { Component } from 'react';
import BookItem from '../BookItem';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested } from '../../actions';
import Spinner from './../Spinner';
import './BookList.scss';

class BookList extends Component {

    componentDidMount() {
        const { bookstoreService, booksLoaded, booksRequested } = this.props;
        booksRequested();
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data));
    }

    render() {
        const { books, loading } = this.props;
        if (loading) {
            return <Spinner />
        }
        return (
            <ul className='book-list'>
                {
                    books.map(book => {
                        return (
                            <li key={book.id}><BookItem book={book} /></li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToprops = ({ books, loading }) => {
    return { books, loading };
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested
};

export default withBookstoreService()(
    connect(mapStateToprops, mapDispatchToProps)(BookList)
);