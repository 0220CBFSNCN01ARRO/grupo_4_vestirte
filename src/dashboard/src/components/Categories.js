import React, { Component }from 'react';
import Category from './Category'

class Categories extends Component {
    
    constructor (){
        super();
        this.state = {
            categorias:[]
        }
    }
    componentDidMount(){
        //ultimo usuarios
        fetch("/api/")
        .then(res=>res.json())
        .then(res=>{
            console.log(res.data)
            this.setState({
                categorias:res.data
            })
        })   
    }
    render() {
        return (
		<div className="card shadow mb-4">
		<div className="card-header py-3">
		<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
		</div>
		
		<div className="card-body">
		<div className="row">
		<div className="col-lg-6 mb-4">
		{this.state.categorias.map((cate, i) => (
			<Category key={i}>
				
			</Category>))}
		</div>
		</div>
		</div>
		</div>
		);
	}
}
export default Categories;