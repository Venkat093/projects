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
        <div className="row">
          <div className="col-md-4">
          {/* <img className="abcd" src="data:image/jpeg;base64,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"></img> */}
        </div>
        <div className="col-md-12">
             <div className="addpimg">
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
      </div>
      </div>

      </React.Fragment>
        )
    }
}
export default addproducts ;