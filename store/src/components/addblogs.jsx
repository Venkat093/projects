import React, { Component } from 'react'
import {Link} from "react-router-dom";
import blogservices from '../services/blogservices';
import Admin from './Admin';
export default class addblogs extends Component {
    constructor(props) {
        super(props)

        this.state ={
            headline:'',
            id:'',
            productname:'',
            img:'',
            discription:''




            
        }
        this.changeproductnamenamehandler=this.changeproductnamenamehandler.bind(this);
        
        this.changeimghandler=this.changeimghandler.bind(this);
        this.changediscriptionhandler=this.changediscriptionhandler.bind(this);
        this.changeproductidhandler=this.changeproductidhandler.bind(this);
        this.Save=this.Save.bind(this);
        this.changeproductheadlinehandler=this.changeproductheadlinehandler.bind(this);
    }

    Save =(e) => {
        e.preventDefault();
        let product={id:this.state.id,productname:this.state.productname,img:this.state.img,discription:this.state.discription};
        console.log('product=>' +JSON.stringify(product));
  
       blogservices.addproduct(product).then(res=>{
          this.props.history.push('/')
        })
  
        
    }
    changeproductheadlinehandler=(e)=>
    {
        this.setState({headline:e.target.value});
    }

    changediscriptionhandler=(event)=>{
        this.setState({discription:event.target.value});
    }
   
    changeimghandler=(event)=>{
        this.setState({img:event.target.value});
    }
    
    changeproductnamenamehandler=(event)=>{
        this.setState({productname:event.target.value});
    }
  
    changeproductidhandler=(e)=>
    {
      this.setState({id:e.target.value});
    }

    
    render() {
        return (
            <React.Fragment>
                <Admin/>
                <div className="col-md-12">
             <div className="addpimg1">
          <section  className="container-fluid">
          <section className="row justify-content-center">
            <section className="col-12 col-sm-8 col-md-8">
            <form className="form-container1">
              <h1>Add Blog</h1>
              <div className="user-details">
              <div className="form-group">
    <label htmlfor="productname">  Product  CODE </label>
    <input type="text" className="form-control" id="productCODE"  placeholder="Enter productcode"
    value={this.state.productid} onChange={this.changeproductidhandler}/>
      </div>

      <div className="form-group">
    <label htmlfor="productname">  Title </label>
    <input type="text" className="form-control" id="productCODE"  placeholder="Enter productcode"
    value={this.state.headline} onChange={this.changeproductheadlinehandler}/>
      </div>
                <div className="form-group">
    <label htmlfor="productname">  Productname </label>
    <input type="text" className="form-control" id="productname"  placeholder="Enter productname"
    value={this.state.productname} onChange={this.changeproductnamenamehandler}/>
      </div>
     
     
      <div className="form-group">
    <label htmlfor="Rom">  Image url </label>
    <input type="text" className="form-control" id="img"  placeholder="img url"
    value={this.state.img} onChange={this.changeimghandler}/>
      </div>
               
      
              </div>
              <div className="form-group">
    <label htmlfor="Rom">  Discription </label>
    <textarea type="text" className="form-control" id="discription"  placeholder="Discription"
    value={this.state.discription} onChange={this.changediscriptionhandler}/>
      </div>
      <button  id="btn" className=" btn btn-primary" onClick={this.Save}>addproduct</button>
      <Link to ="Admin">Back</Link>
           </form> 

     </section>
     </section>
     </section>
      </div>
      </div>
            </React.Fragment>
        )
    }
}
