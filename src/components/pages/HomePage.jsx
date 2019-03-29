import React from 'react';
import BookList from '../BookList';
import ShoppingCartTable from './../ShoppingCartTable';

const HomePage = () => {
    return (
        <React.Fragment>
            <BookList />
            <ShoppingCartTable />
        </React.Fragment>
    );
};
 
export default HomePage;