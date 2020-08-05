import React, {Component}from 'react';
import Fila from './Fila'

class Productlist extends Component {
    
    constructor (){
        super();
        this.state = {
            products:[],
            cantidad:0,
        }
    }
    componentDidMount(){
        //ultimo usuarios
        fetch("/api/productos")
        .then(res=>res.json())
        .then(res=>{
            console.log(res.data)
            this.setState({
                products:res.data
            })
        })   
    }
    render(){
        return (
            <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">All products</h6>
                        </div>
                    
            
            <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Categories</th>
                            <th>Colors</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Categories</th>
                            <th>Colors</th>
                            <th>Stock</th>
                        </tr>
                    </tfoot>
                    <tbody>
                    {this.state.products.map((product, i) => (
                        <Fila key={i} {...product} />
                    )
                    )}
                    </tbody>                
                </table>
                </div>
                </div>
            </div>                                                
        );
    }

}

export default Productlist;