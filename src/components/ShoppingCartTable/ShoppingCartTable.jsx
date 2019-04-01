import React from 'react';
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemoveFromCart, allBookRemoveFromCart } from '../../actions';
import './ShoppingCartTable.scss';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renrerRow = (item, index) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        className="btn btn-outline-warning btn-sm mr-2"
                        onClick={() => onDecrease(id)}
                    >
                        <i className="fa fa-minus-circle" />
                    </button>
                    <button
                        className="btn btn-outline-success btn-sm mr-2"
                        onClick={() => onIncrease(id)}
                    >
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => onDelete(id)}
                    >
                        <i className="fa fa-trash-o" />
                    </button>
                </td>
            </tr>
        );
    };
    return (
        <div className='shopping-cart-table'>
            <h2>Your Order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map(renrerRow) }
                </tbody>
            </table>
            <div className="shopping-cart-table__total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToPtops = ({ shoppingCart:{ cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemoveFromCart,
    onDelete: allBookRemoveFromCart
}

export default connect(mapStateToPtops, mapDispatchToProps)(ShoppingCartTable);