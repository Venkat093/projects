import React, { Component } from 'react'
import Admin from './Admin'
import Adminfooter from './adminfooter'
import blogservices from '../services/blogservices';
import productservices from '../services/productservices';
import product from './product';
export default class Adminhome extends Component {
    constructor(props) {
        super(props)

        this.state ={
            blogs:[],
            products:[] 
        }
        
        this.viewproduct=this.viewproduct.bind(this);
    }
    componentDidMount()
    {
        blogservices.getproducts().then((res) => {
            this.setState({blogs :res.data});
        });
        productservices.getproducts().then((res) => {
            this.setState({products :res.data});
        });
       
    } 
    viewproduct(id)
    {
        this.props.history.push(`/adminproduct/${id}`);
    }
    render() {
        return (
          <React.Fragment>
           <Admin/>
           <section  className="container-fluid">
          <section className="row /* justify-content-center */">
            <section className=" col-md-10 ">
            <div className="form-container2">
            <div >
                          {this.state.blogs.slice(0,1).map(blog=>
                               <div class="row" key={blog.id}>
                               <div class="col-md-7 mt-5">
                                 <h4>{blog.headline}</h4>
                                 <h2>{blog.productname}</h2>
                                 <p className="para">{blog.discription}</p>
                                 
                              </div>
                                <div id="box" class="box col-md-3 ml-4 mt-5 p-2 "><img id="boximg" src={blog.img} alt=""/></div>
                               </div>
                            )}
                      </div>
           </div> 
           <div className="row"> 
     {this.state.products.slice(0,2).map(product=>
    <div className="col-md-5 form-container3">
    <div class="card1" key={product.id}>
      <img onClick={()=>this.viewproduct(product.id)} className="adminimg" src={product.img} alt="Jane"/>
      <div class="container">
        <h2>{product.productname}</h2>
        <p class="title">{product.brand}</p>
        <p>{product.discriptions}</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
     
    </div>
  </div>
         </div>
      ) }
     </div>
     </section>
     </section>
     </section>
     
              <Adminfooter/>
          </React.Fragment>
        )
    }
}
