import React, { Component } from 'react'
import { Link } from 'react-router-dom';

 class Headercomponent extends Component {
    constructor(props) {
        super(props)

        this.state ={
            
        }
        this.adduser=this.adduser.bind(this);
    }
    adduser()
    {
      this.props.history.push('/signup'); 
    }
    render() {
        return (
           <nav className="navbar navbar-custom navbar-expand-md navbar-dark bg-dark shadow-sm">
               <Link to="/">
               <span class="navbar-brand mb-0 h1">Home</span>
               </Link>
              <ul className="navbar-nav align-items-center">
                  <li className="nav-item ml-5">
                  <Link to="products" className="nav-link">products</Link>
                  </li>
              </ul>
              <Link to="cart" className="ml-auto">
                      <button>
                          <i className="fas fa-cart-plus"/>
                          my cart
                      </button>
                  </Link>
                  <Link to="login" className="nav-link"><span class="navbar-brand mb-0 h1">login</span></Link>

           </nav>
        )
    }
}
export default Headercomponent;