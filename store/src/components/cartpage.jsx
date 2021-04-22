import React, { Component } from 'react'
import '../App.css';
import Headercomponent from './Headercomponent'
 class cartpage extends Component {
    render() {
        return (
            <React.Fragment>
            <Headercomponent /> 
              <div className="container">
                  <h1></h1>
                  <div className="cart">
                    <div className="productscart">
                        <div className="productcart">
                       <img src="https://techguff.com/wp-content/uploads/2019/12/nokia-9.1.jpg"></img>
                       <div class="productcart-info">
                          <h2 className="productcar-price">samsung</h2>
                          <h2 className="productcar-price">2000</h2>
                            <p>
                                 <i className="fa fa-trash" aria-hidden="true"></i>
                                 <span className="productcar-remove">Remove</span>

                           </p>
                        </div>   
                        </div> 
                    </div> 
                        <div className="cart-total"></div> 
                  </div>
              </div>
            </React.Fragment>
        )
    }
}
export default cartpage;
