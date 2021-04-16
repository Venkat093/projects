import React, { Component } from 'react';
import Headercomponent from './Headercomponent';
import '../App.css';
import {Carousel} from 'react-bootstrap';


class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state ={
            
        }
        this.list=this.list.bind(this);
        this.addproduct=this.addproduct.bind(this);
        this.viewproducts=this.viewproducts.bind(this);
        this.login=this.login.bind(this);
        this.Admin=this.Admin.bind(this);
    
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
    addproduct()
    {
      this.props.history.push('/addproduct'); 
    }
    viewproducts()
    {
        this.props.history.push('/products')
    }
   
   
    render() {
        return (
        <React.Fragment>
            <Headercomponent /> 

            <div className="container ">
               <div className="row">
                   <div className="col-md-8">
                       <div className="panel panel-default">
                       <div classNama="panel-body ">
                   <Carousel>
                <Carousel.Item>
          <img id="coimg"id="coimg" className="d-block w-100 img-responsive" src="https://cutt.ly/HvuUnOS" alt="First slide"/>
           <Carousel.Caption>
             
             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
          <img id="coimg" className="d-block w-100 img-responsive " src="https://cutt.ly/HvuUnOS" alt="First slide"/>
           <Carousel.Caption>
             
             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
          <img id="coimg"  className="d-block w-100 img-responsive" src="https://cutt.ly/HvuUnOS" alt="First slide"/>
           <Carousel.Caption>
             
             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                   </div>
                   </div></div>
                   <div className ="col-md-4">
                    <img className=" img-responsive" src=""></img>
                   </div>
               </div>
               <hr></hr>
             <div className="container">

     
               <div className="row">
                   <div className="col-md-4">
                       <div className="panel panel-default">
                           <div className="panel-body">
                        
                           </div>
                       </div>
                   </div>
                   <div className="col-md-4">
                       <div className="panel panel-default">
                           <div className="panel-body">
                           
                           </div>
                       </div>
                   </div>
                   <div className="col-md-4">
                       <div className="panel panel-default">
                           <div className="panel-body">
                           
                           </div>
                       </div>
                   </div>
               </div>
            </div>
                  <div className="home-headline"><span>featured mobiles</span></div>
                  <hr id="hr1"/>
            </div>
            

































           













     

























            <div>
                 {/* <button className="btn btn-primary mt-5" onClick={this.list}> list</button> */}
                {/*  <button className="btn btn-primary" onClick={this.adduser}> signup</button> */}

                <div className="col-3 mt-5">
                  {/* <li className="list-group-item" onClick={this.addproduct}>addproduct</li>  */}
                 <li className="list-group-item" onClick={this.viewproducts}>products</li>
                {/*  <li className="list-group-item" onClick={this.list}>List</li> */}
                 <li className="list-group-item" onClick={this.login}>login</li>
                 <li className="list-group-item" onClick={this.Admin}>Admin</li>
                 </div>

            </div>
            </React.Fragment>
        )
    }
}
export default HomeComponent