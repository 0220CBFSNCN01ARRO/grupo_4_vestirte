import React from 'react';
import avatarprod from '../assets/images/product_dummy.svg';
import Card from './Card';
import Lastproduct from './Lastproduct';
import Categories from './Categories';
import Productlist from './Productlist';

function Main(props) {
    return (
        <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
               <div className="row">           
            <div className="col-md-4 mb-4">
                <Card color='primary' text='Products in Database' value='135'/>
            </div>          
            <div className="col-md-4 mb-4">
            <Card color='success' text='Amount in products' value='$546.456'/>                
            </div>
           <div className="col-md-4 mb-4">
            <Card color='warning' text='Users quantity' value='38'/>
            </div>
        </div>   
        <div className="row">
            <Lastproduct/>
            <div className="col-lg-6 mb-4">						
                <Categories />
            </div>
        </div>
    {/* Listado de productos */}

    <div className='row'>
        <div className='col-12'>
            <Productlist/>
        </div>
    </div>
    </div>
    );
}

export default Main;