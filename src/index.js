import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/BookstoreServiceContext';
import store from './store';

const root = document.getElementById('root');
const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookstoreService}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    root
);