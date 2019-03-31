import React from 'react';
import { connect } from 'react-redux';
import './ShoppingCartTable.scss';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renrerRow = (item, index) => {
        const { id, name, count, total } = item;
        return (
            <tr key={id}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={() => onDelete(id)}
                    >
                        <i className="fa fa-trash-o" />
                    </button>
                    <button
                        className="btn btn-outline-success btn-sm float-right mr-2"
                        onClick={() => onIncrease(id)}
                    >
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        className="btn btn-outline-warning btn-sm float-right mr-2"
                        onClick={() => onDecrease(id)}
                    >
                        <i className="fa fa-minus-circle" />
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

const mapStateToPtops = ({ cartItems, orderTotal }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => {
            console.log(`Increase ${id}`);
        },
        onDecrease: (id) => {
            console.log(`onDecrease ${id}`);
        },
        onDelete: (id) => {
            console.log(`onDelete ${id}`);
        }
    };
};

export default connect(mapStateToPtops, mapDispatchToProps)(ShoppingCartTable);