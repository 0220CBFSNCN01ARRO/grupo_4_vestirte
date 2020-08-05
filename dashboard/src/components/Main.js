import React, {Component} from 'react';
import Card from './Card';
import Lastproduct from './Lastproduct';
import Categories from './Categories';
import Productlist from './Productlist';

class Main extends Component {
    constructor (){
        super();
        this.state = {
            cards:[]
            
            
        }
    }
    componentDidMount(){
        //ultimo usuarios
        fetch("/api/dashboard/cards")
        .then(res=>res.json())
        .then(res=>{
            console.log(res.data)
            this.setState({
                cards:res.data
            })
        }) ; 
        
    }
    
    render(){
        return (
            <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <div className="row">           
            
            {this.state.cards.map((card, i)=>{
                return(
                    <div key={i} className="col-md-4 mb-4">
                    <Card {...card}/>                
                    </div>  
                    )
                })}
                
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