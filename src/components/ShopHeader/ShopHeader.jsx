import React from 'react';
import './ShopHeader.scss';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className='shop-header row'>
            <a href="#" className='shop-header__logo text-dark'>BookShop</a>
            <a href="#" className='shop-header__shopping-cart'>
                <i className='cart-icon fa fa-shopping-cart' />
                {numItems} items (${total})
            </a>
        </header>
    );
};
 
export default ShopHeader;