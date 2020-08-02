import React, {Component} from 'react';
import Card from './Card';
import Lastproduct from './Lastproduct';
import Categories from './Categories';
import Productlist from './Productlist';

class Main extends Component {
    constructor (){
        super();
        this.state = {
            Lasproducts: []
        }
    }
    componentDidMount(){
        fetch("api/usuarios/ultimo")
        .then(res=>res.json())
        .then(res=>{
                console.log(res.data)
              })        
    }
    render(){
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
        <div className='row'>
            <div className='col-12'>
                <Productlist/>
            </div>
        </div>
        </div>
        );
    }   
}

export default Main;