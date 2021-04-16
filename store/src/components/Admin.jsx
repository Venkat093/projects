import React, { Component } from 'react'
import {Link,NavLink} from "react-router-dom";
class Admin extends Component {
    render() {
        return (
            <div className="">
               <div className="body">
                 <header>
                   <div className="logo1">ADMIN</div>
                   <nav>
                     <ul>
                     <li className="nav-item">
        <Link id="link" className="active" to ="list"><span className=" navbar-brand mb-0 h1">list</span></Link>
        </li>
        <li className="nav-item">
        <Link id="link" to="Adminproducts"><span class=" ab  navbar-brand mb-0 h1">productslist</span></Link>
        </li>
        <li className="nav-item">
        <Link id="link" to ="addproduct"><span class="ab navbar-brand mb-0 h1">Add product</span></Link>
        </li>
        <li className="nav-item">
        <Link id="link" to="updateproduct"><span class="ab navbar-brand mb-0 h1">update product</span></Link>
        </li>
                     </ul>
                   </nav>
                   <div className="menu-toggle"><i className="fa fa-bars"></i></div>
                 </header>


        </div>
               
              






             
        

       <div>
       <Link  className ="mt-5"to ="">back</Link>
       </div>

            </div>
        )
    }
}
export default Admin ;