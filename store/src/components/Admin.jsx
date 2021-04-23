import React, { Component } from 'react'
import {Link,NavLink} from "react-router-dom";
import Adminfooter from "../components/adminfooter";
class Admin extends Component {
  constructor(props) {
    super(props)

    this.state ={
        
    }
  
    
  
       
}
  
    render() {
        return (
          <React.Fragment>
            <div className="adminmar">
               <div className="body">
                 <header>
                   {/* <div className="logo1" onClick={this.home}>ADMIN</div> */}
                <div>  <Link id="link" className="logo1" to ="/home"><span className=" navbar-brand mb-0 h1">ADMIN</span></Link>
                </div> 
                   <nav>
                     <ul>
                     <li className="nav-item1">
        <Link id="link" className="active" to="/list"><span className=" navbar-brand mb-0 h1">list</span></Link>
        </li>
        <li className="nav-item1">
        <Link id="link" to="Adminproducts"><span class=" ab  navbar-brand mb-0 h1">productslist</span></Link>
        </li>
        <li className="nav-item1">
        <Link id="link" to="blogs"><span class="ab navbar-brand mb-0 h1">blogs</span></Link>
        </li>
        <li className="nav-item1">
        <Link id="link" to ="addproduct"><span class="ab navbar-brand mb-0 h1">Add product</span></Link>
        </li>
        <li className="nav-item1">
        <Link id="link" to="addblog"><span class="ab navbar-brand mb-0 h1">add blog</span></Link>
        </li>
        <li><div>
                      <Link to="logout" className="nav-link"><span class="navbar-brand mb-0 h1">logout</span></Link>
                      </div></li>
                     </ul>
                   </nav>
                   <div className="menu-toggle"><i className="fa fa-bars"></i></div>
                 </header>
        </div>
               
       <div>
      
       </div>
       
            </div>
           {/*  <div className="body2">
              <div className="container">
            <Link  className ="mt-5"to ="">back</Link>
          <Link  className ="mt-5"to ="addblog">add blog</Link> 
            <Link  className ="mt-5"to ="blogs">blogs</Link>
            </div>
            </div> */}
           {/*  <Adminfooter/> */}
            </React.Fragment>
        )
    }
}
export default Admin ;