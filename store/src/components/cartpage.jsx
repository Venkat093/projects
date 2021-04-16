import React, { Component } from 'react'
import '../App.css';
import Headercomponent from './Headercomponent'
 class cartpage extends Component {
    render() {
        return (
            <React.Fragment>
            <Headercomponent /> 
            <div className="container cart-page">
                <table>
                    <tr>
                        <th>product</th>
                        <th>Quantity</th>
                        <th>subtotal</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                 <img src="https://m.media-amazon.com/images/I/71X07lwWutL._AC_SS450_.jpg"></img> 
                                <div>
                                    <p>Iphone</p>
                                    <small>apple</small><br></br>
                                    <a href="">remove</a>
                                </div>
                            </div>
                        </td>
                        <td>product name</td>
                        <td><input type="number" value="1"></input></td>
                        <td>$520</td>
                    </tr>
                </table>

                <div className="total-price">
                    <table>
                        <tr>
                            <td>total</td>
                            <td>$520</td>
                        </tr>
                    </table>
                </div>
            </div>
          </React.Fragment>
        )
    }
}
export default cartpage;
