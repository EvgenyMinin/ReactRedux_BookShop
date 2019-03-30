import React, { Component } from 'react';
import BookItem from '../BookItem';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import Spinner from './../Spinner';
import './BookList.scss';

class BookList extends Component {

    componentDidMount() {
        const { bookstoreService, booksLoaded } = this.props;
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
    booksLoaded
};

export default withBookstoreService()(
    connect(mapStateToprops, mapDispatchToProps)(BookList)
);