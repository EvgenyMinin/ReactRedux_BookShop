import React from 'react';
import { withBookstoreService } from '../hoc';
import './App.scss';

const App = ({ bookstoreService }) => {
    console.log(bookstoreService.getBooks());
    return (
        <h1>Hello react</h1>
    );
}
 
export default withBookstoreService()(App);