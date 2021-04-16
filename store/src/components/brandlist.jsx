import React, { Component } from 'react';
import productservices from '../services/productservices';
import Pagination from '../components/common/paginagtion';
import {paginate} from '../utils/paginate' ;

import '../App.css';
class brandlist extends Component {
    constructor(props) {
        super(props)

        this.state ={
            brand: this.props.match.params.brand,
            products:[],
            currentPage:1,
            pageSize:6
            
        }
    }
    componentDidMount()
    {
        productservices.getproductbybrand(this.state.brand).then( res=>{
            this.setState({products: res.data});
        })
    }
    render() {
        const {length :count} =this.state.products;
        const {pageSize,currentPage,products :allproducts}=this.state;
      
        
        const products= paginate(allproducts, currentPage,pageSize); 
        return (
            <React.Fragment>
           <div className="row">
              <div className="col-md 2">
              <li className="list-group-item"  onClick={this.Home}>Home</li>
              <br></br>
                
              </div>
            <div className="main_content col-md-9">
               
                 {products.map(product=>
                   
                     <div className="card" key={product.id}>
                         <div className="card_img">
                             <img   src={product.img} alt="asdfghjkl" />
                             </div>
                         <div className="card_header" >
                             <h2>{product.productname}</h2>
                            <p className="price" >{product.listprice}<span>$</span></p>
                            <p className="brand" >{product.brand}</p>
                           {/*  <p className="ram">{product.ram}</p>
                            <p className="rom">{product.rom}</p>
                            <p className="weight">{product.weight}</p>
                            <p className="publisher">{product.publisher}</p> */}
                            <div className="btn " onClick={this.cart}> Add to cart</div>
                           
                             </div>   
                         </div>
                 )}
            </div>
            </div>
            <Pagination
              itemsCount={count} 
               pageSize={pageSize}
               currentPage={currentPage}
               onPageChange={this.handlepagechange}

            />
            </React.Fragment>
        )
    }
}
export default brandlist;