import React, { Component } from 'react'
import productservices from '../services/productservices'
import '../App.css';
 class product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Item: {}
            
        }
        this.viewproductb=this.viewproductb.bind(this);
   
    }
    componentDidMount()
    {
        productservices.getproductbyid(this.state.id).then( res=>{
            this.setState({Item: res.data});
        })
    }
    viewproductb(brand)
    {
        this.props.history.push(`/products/${brand}`);
    }
    render() {
        return (
    
            <div className="app">
           <div className="details">     
                 <div className="big-img">
                     <img src={this.state.Item.img} alt=""/>
                 </div>
                 <div className="box">
                     <div className="row">
                         <h2>{this.state.Item.productname}</h2>
                         <span>${this.state.Item.listprice}</span>
                     </div>
                    <div className="specification">
<ul className="no-bullets" >
                        <li><b  onClick={()=>this.viewproductb(this.state.Item.brand)}>Brand    :      {this.state.Item.brand}</b></li>
                        <li><b>Ram      :      {this.state.Item.ram}</b></li>
                        <li><b>Rom      :      {this.state.Item.rom}</b></li>
                        <li><b>Weight   :      {this.state.Item.weight}</b></li>
                        <li><b>Dealer   :      {this.state.Item.publisher}</b></li>
                        </ul>
                        <p1><b>discription :</b>{this.state.Item.discription}</p1>
                    </div>
                    <button className="cart">Add to cart</button>
                 </div>
                 </div>   
            </div>
        )
    }
}
export default product ;