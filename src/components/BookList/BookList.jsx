import React, { Component } from 'react';
import BookItem from '../BookItem';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../actions';
import Spinner from './../Spinner';
import ErrorIndicator from './../ErrorIndicator';
import './BookList.scss';

const BookList = ({ books }) => {
    return (
        <ul className='book-list'>
            {
                books.map(book => {
                    return (
                        <li key={book.id}><BookItem book={book} /></li>
                    );
                })
            }
        </ul>
    );
};

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error } = this.props;
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        return <BookList books={books} />
    }
}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    };
};

export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);