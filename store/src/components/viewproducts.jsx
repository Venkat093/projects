import React, { Component } from 'react';
import productservices from '../services/productservices';
import '../App.css';
import Pagination from '../components/common/paginagtion';
import {paginate} from '../utils/paginate' ;
import ListGroup from './common/listGroup';
import  { getbrand } from '../services/brands';
class viewproducts extends Component {
    constructor(props) {
        super(props)

        this.state ={
            products:[],
            brands:[],
            currentPage:1,
            pageSize:6

        }
    }
     componentDidMount()
     {
         productservices.getproducts().then((res) => {
             this.setState({products :res.data});
         });
         this.setState({brands :getbrand});
     }
     /* componentDidMount()
     {
         this.setState({brands :getbrand});
     } */
     handlepagechange=page=>{
        
         this.setState({currentPage:page});
     }
     handleBrandSelect = brand=>
     {
         console.log(brand);
     }
     render()
     { 
        const {length :count} =this.state.products;
        const {pageSize,currentPage,products :allproducts}=this.state;

        const products= paginate(allproducts, currentPage,pageSize); 
        return (
            <React.Fragment>
           <div className="row">
              <div className="col-md 2">
                   <ListGroup items={this.state.brands} 
                   textProperty="name"
                   valueProperty="_id"
                   onItemSelect={this.handleBrandSelect}/>   
              </div>
            <div className="main_content col-md-8">
               
                 {products.map(product=>
                   
                     <div className="card" key={product.id}>
                         <div className="card_img">
                             <img src="https://media.wired.com/photos/5bcea2642eea7906bba84c67/master/w_2560%2Cc_limit/iphonexr.jpg" alt="photos to be display"/>
                             </div>
                         <div className="card_header" >
                             <h2>{product.productname}</h2>
                            <p className="price">{product.listprice}<span>$</span></p>
                            <p className="brand">{product.brand}</p>
                           {/*  <p className="ram">{product.ram}</p>
                            <p className="rom">{product.rom}</p>
                            <p className="weight">{product.weight}</p>
                            <p className="publisher">{product.publisher}</p> */}
                            <div className="btn"> Add to cart</div>
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

            
              

                    


         
        

export default viewproducts;
