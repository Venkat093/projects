import React, { Component } from 'react'
import productservices from '../services/productservices'
import '../App.css';
import Pagination from '../components/common/paginagtion';
import {paginate} from '../utils/paginate' ;
import Headercomponent from './Headercomponent'
import Footercomponent from './footercomponent';
class productslist extends Component {
    constructor(props) {
        super(props)

        this.state ={
            products:[], 
            currentPage:1,
            pageSize:6
        }
        this.viewproduct=this.viewproduct.bind(this);
        this.Home=this.Home.bind(this);
        this.cart=this.cart.bind(this);
      
           
    }
    cart()
    {
        this.props.history.push('/cart')
    }
    Home()
    {
        this.props.history.push('/');
    }
    componentDidMount()
     {
         productservices.getproducts().then((res) => {
             this.setState({products :res.data});
         });
     } 
     
     handlepagechange=page=>{
        
        this.setState({currentPage:page});
    }
    viewproduct(id)
    {
        this.props.history.push(`/product/${id}`);
    }
   
   //`/products/${brand}`
    render() {
        /* async function search(key) {
            let result= await fetch("http://localhost:8082/api/allproduct/"+key);
            result=await result.json();
            
          } */
        const {length :count} =this.state.products;
        const {pageSize,currentPage,products :allproducts}=this.state;
      
        
        const products= paginate(allproducts, currentPage,pageSize); 
        return (
            
            <React.Fragment>
                 
            <Headercomponent /> 
            <div className="">
           <div className="row " >
              <div className="col-md 2">
            {/*   <li className="list-group-item"  onClick={this.Home}>Home</li> */}
              <br></br>
                
              </div>
            <div  className="main_content col-md-9">
               
                 {products.map(product=>
                   
                     <div className="card" key={product.id}>
                         <div className="card_img">
                             <img onClick={()=>this.viewproduct(product.id)}  src={product.img} alt="asdfghjkl" />
                             </div>
                         <div className="card_header" >
                             <h2>{product.productname}</h2>
                            <p className="price" >{product.listprice}<span>$</span></p>
                            <p className="brand">{product.brand}</p>
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
            </div>
            <Footercomponent />
            </React.Fragment>
        )
    }
}

export default productslist;