import React, { Component } from 'react'
import Admin from './Admin'
import Adminfooter from './adminfooter'
import '../App.css';
import productservices from '../services/productservices';
export default class Adminproduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Item: {}
            
        }
       
    
    }
    componentDidMount()
    {
        productservices.getproductbyid(this.state.id).then( res=>{
            this.setState({Item: res.data});
        })
    }
    render() {
        return (
            <React.Fragment>
            <Admin/>
            <div className="app">
           <div className="details">     
                 <div className="big-img">
                     <img src={this.state.Item.img} alt="asdfghjk"/>
                 </div>
                 <div className="box">
                     <div className="row">
                         <h2>{this.state.Item.productname}</h2>
                         <span>${this.state.Item.listprice}</span>
                     </div>
                    <div className="specification">
                <ul1 className="no-bullets" >
                        <li><b  onClick={()=>this.viewproductb(this.state.Item.brand)}>Brand    :      {this.state.Item.brand}</b></li>
                        <li><b>Ram      :      {this.state.Item.ram}</b></li>
                        <li><b>Rom      :      {this.state.Item.rom}</b></li>
                        <li><b>Weight   :      {this.state.Item.weight}</b></li>
                        <li><b>Dealer   :      {this.state.Item.publisher}</b></li>
                        </ul1>
                        <p1><b>discription :</b>{this.state.Item.discription}</p1>
                    </div>
                    <button className="cart">Add to cart</button>
                 </div>
                 </div>   
            </div>
          <Adminfooter/>
            </React.Fragment>
        )
    }
}
