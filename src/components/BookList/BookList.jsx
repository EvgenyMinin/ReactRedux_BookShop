import React, { Component } from 'react';
import BookItem from '../BookItem';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import Spinner from './../Spinner';
import ErrorIndicator from './../ErrorIndicator';
import './BookList.scss';

class BookList extends Component {

    componentDidMount() {
        const { bookstoreService, booksLoaded, booksRequested, booksError } = this.props;
        booksRequested();
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((err) => booksError(err));
    }

    render() {
        const { books, loading, error } = this.props;
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
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

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
};

export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookList)
);