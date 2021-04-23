import React, { Component } from 'react'
import {Link} from "react-router-dom";
import productservices from '../services/productservices'
import Pagination from '../components/common/paginagtion';
import {paginate} from '../utils/paginate' ;
import Adminfooter from "../components/adminfooter";
import Admin from "../components/Admin"
 class Adminproducts extends Component {
    constructor(props) {
        super(props)

        this.state ={
            products:[],
            currentPage:1,
            pageSize:5
        }
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
    updateproduct(id){
        this.props.history.push(`/updateproduct/${id}`);
       }
    render() 
    {
        const {length :count} =this.state.products;
        const {pageSize,currentPage,products :allproducts}=this.state;
        const products= paginate(allproducts, currentPage,pageSize); 
        return (
            <React.Fragment>
            <Admin/>
            <div>
                <Link to ="Adminhome">Back</Link>
                 <table className="table striped bordered hover">
                   <thead>
                       <tr>
                           <th>productcode</th>
                           <th>productname</th>
                           <th>Brand</th>
                           <th>Ram</th>
                           <th>Rom</th>
                           <th>weight</th>
                           <th>dealer</th>
                           <th>price</th>
                           <th>img</th>
                           <th>discription</th>
                          
                       </tr>
                   </thead>
                   <tbody>
                       {
                           products.map(
                            product =>
                            <tr key ={product.id}>
                                <td>{product.id}</td>
                                <td>{product.productname}</td>
                                <td>{product.brand}</td>
                                <td>{product.ram}</td>
                                <td>{product.rom}</td>
                                <td>{product.weight}</td>
                                <td>{product.publisher}</td>
                                <td>{product.listprice}</td>
                                <td><img   src={product.img} alt="asdfghjkl" /></td>
                                <td>{product.discription}</td>
                                <td>
                                <button className="btn btn-info btn-large" onClick={()=>this.updateproduct(product.id)}>update</button>
                                </td>
                               
                              
                            </tr>
                           )
                       }
                   </tbody>
               </table>
               <Pagination
              itemsCount={count} 
               pageSize={pageSize}
               currentPage={currentPage}
               onPageChange={this.handlepagechange}

            />
            </div>
             <Adminfooter/>
            </React.Fragment>


        )
    }
       
 }
export default  Adminproducts;
