import React, { Component } from 'react'
import '../App.css';
import {Link} from "react-router-dom";
import productservices from '../services/productservices';
import Admin from './Admin';
 class addproducts extends Component {
    constructor(props) {
        super(props)

        this.state ={
          id:'',
            productname:'',
            brand:'',
            ram:'',
            rom:'',
            weight:'',
            publisher:'',
            listprice:'',
            img:'',
            discription:''




            
        }
        this.changeproductnamenamehandler=this.changeproductnamenamehandler.bind(this);
        this.changeBrandnamenamehandler=this.changeBrandnamenamehandler.bind(this);
        this.changeRamhandler=this.changeRamhandler.bind(this);
        this.changeRoomhandler=this.changeRoomhandler.bind(this);
        this.changeweighthandler=this.changeweighthandler.bind(this);
        this.changeDealerthandler=this.changeDealerthandler.bind(this);
        this.changepricehandler=this.changepricehandler.bind(this);
        this.changeimghandler=this.changeimghandler.bind(this);
        this.changediscriptionhandler=this.changediscriptionhandler.bind(this);
        this.changeproductidhandler=this.changeproductidhandler.bind(this);
        this.Save=this.Save.bind(this);
    }



    Save =(e) => {
      e.preventDefault();
      let product={id:this.state.id,productname:this.state.productname,brand:this.state.brand,ram:this.state.ram,rom:this.state.rom,weight:this.state.weight,publisher:this.state.publisher,img:this.state.img,discription:this.state.discription,listprice:this.state.listprice};
      console.log('product=>' +JSON.stringify(product));

      productservices.addproduct(product).then(res=>{
        this.props.history.push('/')
      })

      
  }



    changediscriptionhandler=(event)=>{
        this.setState({discription:event.target.value});
    }
    changepricehandler=(event)=>{
        this.setState({listprice:event.target.value});
    }
    changeimghandler=(event)=>{
        this.setState({img:event.target.value});
    }
    changeDealerthandler=(event)=>{
        this.setState({publisher:event.target.value});
    }
    changeweighthandler=(event)=>{
        this.setState({weight:event.target.value});
    }
    changeproductnamenamehandler=(event)=>{
        this.setState({productname:event.target.value});
    }
    changeBrandnamenamehandler=(event)=>{
        this.setState({brand:event.target.value});
    }
    changeRamhandler=(event)=>{
        this.setState({ram:event.target.value});
    }
    changeRoomhandler=(event)=>{
        this.setState({rom:event.target.value});
    }
    changeproductidhandler=(e)=>
    {
      this.setState({id:e.target.value});
    }

    
    
    render() 
    {
    
      return (
        <React.Fragment>
             <Admin/>
       
             <div className="addpimg1">
          <section  className="container-fluid">
          <section className="row justify-content-center">
            <section className="col-12 col-sm-8 col-md-8">
            <form className="form-container1">
              <h1>Add product</h1>
              <div className="user-details">
              <div className="form-group">
    <label htmlfor="productname">  Product  CODE </label> 
    <input type="text" className="form-control" id="productCODE"  placeholder="Enter productcode"
    value={this.state.productid} onChange={this.changeproductidhandler}/>
      </div>
                <div className="form-group">
    <label htmlfor="productname">  Productname </label>
    <input type="text" className="form-control" id="productname"  placeholder="Enter productname"
    value={this.state.productname} onChange={this.changeproductnamenamehandler}/>
      </div>
      <div className="form-group">
    <label htmlfor="brand">  Brand </label>
    <input type="text" className="form-control" id="brand"  placeholder="Enter Brand name"
    value={this.state.Brand} onChange={this.changeBrandnamenamehandler}/>
      </div>
      <div className="form-group">
    <label htmlfor="Ram">  Ram </label>
    <input type="text" className="form-control" id="Ram"  placeholder="Ram"
    value={this.state.ram} onChange={this.changeRamhandler}/>
      </div>
      <div className="form-group">
    <label htmlfor="Rom">  Rom </label>
    <input type="text" className="form-control" id="Rom"  placeholder="Rom"
    value={this.state.rom} onChange={this.changeRoomhandler}/>
      </div>
      <div className="form-group">
    <label htmlfor="Rom">  Weight </label>
    <input type="text" className="form-control" id="weight"  placeholder="weight"
    value={this.state.weight} onChange={this.changeweighthandler}/>
      </div>
      <div className="form-group">
    <label htmlfor="Rom">  Dealer </label>
    <input type="text" className="form-control" id="Dealer"  placeholder="Dealer"
    value={this.state.publisher} onChange={this.changeDealerthandler}/>
      </div>

      <div className="form-group">
    <label htmlfor="Rom">  Price </label>
    <input type="text" className="form-control" id="Price"  placeholder="Price"
    value={this.state.listprice} onChange={this.changepricehandler}/>
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
     
      </React.Fragment>
        )
    }
}
export default addproducts ;