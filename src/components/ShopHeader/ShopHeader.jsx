import React from 'react';
import { Link } from 'react-router-dom';
import './ShopHeader.scss';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className='shop-header row'>
            <Link to='/'>
                <div className='shop-header__logo text-dark'>BookShop</div>
            </Link>
            <Link to='/cart'>
                <div className='shop-header__shopping-cart'>
                    <i className='cart-icon fa fa-shopping-cart' />
                    {numItems} items (${total})
                </div> 
            </Link>
        </header>
    );
};
 
export default ShopHeader;