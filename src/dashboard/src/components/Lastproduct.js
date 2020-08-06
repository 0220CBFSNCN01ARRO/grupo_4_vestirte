import React, {Component } from 'react';
import avatarprod from '../assets/images/product_dummy.svg'

class Lastproduct extends Component{

    constructor (){
        super();
        this.state = {
            lu:[]
        }
    }
    componentDidMount(){
        //ultimo usuarios
        fetch("/api/usuarios/ultimo")
        .then(res=>res.json())
        .then(res=>{
            console.log ("asd" + res.data)
            this.setState({lu:res.data
            })
        })
    }

    render(){
        let imagen = this.state.lu.image
    return (
        <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Ultimo Usuario</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src= {imagen} alt="Imagen producto"/>
                        </div>
                        <h4 className="text-center">
                        {this.state.lu.nombre} {this.state.lu.apellido}
                        </h4>
                    </div>
                </div>
            </div>
    );
}
}

export default Lastproduct;