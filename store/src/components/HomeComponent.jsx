import React, { Component } from 'react';
import Headercomponent from './Headercomponent';
import '../App.css';
import {Carousel} from 'react-bootstrap';
import productservices from '../services/productservices';
import Footercomponent from './footercomponent';
import blogservices from '../services/blogservices';

class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state ={
          products:[] ,
          blogs:[],
        }
        this.list=this.list.bind(this);
        this.addproduct=this.addproduct.bind(this);
        this.viewproducts=this.viewproducts.bind(this);
        this.login=this.login.bind(this);
        this.Admin=this.Admin.bind(this);
        this.Adminhome=this.Adminhome.bind(this);
        this.view=this.view.bind(this);
    }
    view()
    {
      this.props.history.push('/ublogs')
    }
    list()
    {
        this.props.history.push('/list');  
    }
    login()
    {
        this.props.history.push('/login');
    }
   Admin()
    {
        this.props.history.push('/Admin');
    }
    Adminhome()
    {
        this.props.history.push('/Adminhome');
    }
    addproduct()
    {
      this.props.history.push('/addproduct'); 
    }
    viewproducts()
    {
        this.props.history.push('/products')
    }
   
    componentDidMount()
     {
         productservices.getproducts().then((res) => {
             this.setState({products :res.data});
         });
         blogservices.getproducts().then((res)=>{
           this.setState({blogs:res.data})
         })
     } 
     
   
    render() {
        return (
        <React.Fragment>
            <Headercomponent /> 

            <div className="container-fluid">
               <div className="row">
                   <div className="col-md-8">
                       <div className="panel panel-default">
                       <div classNama="panel-body ">
                   <Carousel>
                <Carousel.Item>
          <img id="coimg"id="coimg"  onClick={this.viewproducts} className="d-block w-100 img-responsive" src="https://cutt.ly/HvuUnOS" alt="First slide"/>
           <Carousel.Caption>
             
             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>
                </Carousel.Item>

                {this.state.products.slice(0,2).map(product=>
                <Carousel.Item  key={product.id}>
          <img id="coimg" className="d-block w-100 img-responsive " src={product.img} alt="First slide"/>
           <Carousel.Caption>
             
             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>
                </Carousel.Item>  )}
                <Carousel.Item>
          <img id="coimg"  className="d-block w-100 img-responsive" src="https://cutt.ly/HvuUnOS" alt="First slide"/>
           <Carousel.Caption>
             
             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>
                </Carousel.Item>
                </Carousel >
                   </div>
                   </div></div>
                   <div className ="col-md-4 mt-5">
                    <img className=" img-responsive" src=""></img>
                   </div>
               </div>
               <hr></hr>
            {/*  <div className="container">
             <div className="row">
             <div class="column">
    <div class="card1">
      <img className="styel" src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane"/>
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card1">
      <img className="styel" src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane"/>
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card1">
      <img className="styel" src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane"/>
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
             </div>
     
             
            </div> */}
             <div className="container">
            <div className="row">
            {this.state.products.slice(2,6).map(blog=>
              <div className="col-md-6 mt-5" key={blog.id}>
         
         <div class="card1">
           <div className="hpdiv">
             <div className="row">
            <div className="col-md-4">
           <img className="hpimg" src={blog.img} alt="Jane"/></div></div>
           <div className="col-md-2">
           <div class="container">
          <h2>{blog.productname}</h2>
          <p class="title">oneplus  mobiles</p>
          <p></p>
          <p>example@example.com</p>
          </div>
         </div>
         </div>
         </div>
              </div>)}
            </div>
            </div>












                  <div className="home-headline mt-5"><span>featured mobiles</span></div>
                  <hr className="mb-5" id="hr1"/>




            </div>
            <div className="container ">
             <div className="row">
             
            {this.state.blogs.slice(0,3).map(blog=>
            <div class="column" key={blog.id}>
         <div class="card1">
         <img className="styel" src={blog.img} alt="Jane"/>
         <div class="container">
          <h2>{blog.productname}</h2>
          <p class="title">oneplus  mobiles</p>
          <p></p>
          <p>example@example.com</p>
          <p><button class="button" onClick={this.view} >View blog</button></p>
         </div>
         </div>
         </div>
         )} 
      
         </div>
         </div>































           













     

























           
                 {/* <button className="btn btn-primary mt-5" onClick={this.list}> list</button> */}
                {/*  <button className="btn btn-primary" onClick={this.adduser}> signup</button> */}
 {/* <li className="list-group-item" onClick={this.addproduct}>addproduct</li>  */}
  {/*  <li className="list-group-item" onClick={this.list}>List</li> */}
  <div>
                <div className="col-3 mt-5">
                 
                 <li className="list-group-item" onClick={this.viewproducts}>products</li>
               
                 <li className="list-group-item" onClick={this.login}>login</li>
                 <li className="list-group-item" onClick={this.Admin}>Admin</li>
                 <li className="list-group-item" onClick={this.Adminhome}>Admin</li>
                 </div>

            </div>
          <Footercomponent /> 
            </React.Fragment>
        )
    }
}
export default HomeComponent