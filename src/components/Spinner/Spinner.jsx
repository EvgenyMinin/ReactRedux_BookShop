import React from 'react';
import './Spinner.scss';

const Spinner = () => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-rolling">
                <div></div>
            </div>
        </div>
    );
}
 
export default Spinner;