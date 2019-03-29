import React, { Component } from 'react';
import BookItem from '../BookItem';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import './BookList.scss';

class BookList extends Component {

    componentDidMount() {
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();
        console.log(data);

        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
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

const mapStateToprops = ({books}) => {
    return { books };
};

const mapDispatchToProps = {
    booksLoaded
};

export default withBookstoreService()(
    connect(mapStateToprops, mapDispatchToProps)(BookList)
);