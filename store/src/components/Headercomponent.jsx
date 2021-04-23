import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import authservices from '../services/authservices';
 class Headercomponent extends Component {
    constructor(props) {
        super(props)

        this.state ={
            user: {
                username: "",
                jwt: "",
                role: "",
              }, 
        };
        this.adduser=this.adduser.bind(this);
    }
    componentDidMount() {
        let user = authservices.getCurrentUser();
        if (user === null) {
          let username = "";
          let jwt = "";
          let role = "";
          this.setState({ username, jwt, role });
        } else {
          this.setState({ user });
        }
      }
    adduser()
    {
      this.props.history.push('/signup'); 
    }
    render() {
        return (
           <nav1 className="navbar navbar-custom navbar-expand-md navbar-dark bg-dark shadow-sm">
               <Link to="/">
               <span class="navbar-brand mb-0 h1">Home</span>
               </Link>
              <ol className="navbar-nav align-items-center">
              <li1 className="nav-item ml-5">
                  <Link to="products" className="nav-link">products</Link>
                  </li1>
              </ol>
              <Link to="cart" className="ml-auto">
                      <button>
                          <i className="fas fa-cart-plus"/>
                          my cart
                      </button>
                  </Link>
                  {this.state.user.role===""?(
                    <div>
                    <Link to="login" className="nav-link"><span class="navbar-brand mb-0 h1">login</span></Link>
                    </div>    ) :(
                   <div>   <Link to="" className="nav-link"><span class="navbar-brand mb-0 h1"></span></Link>
                    </div>  
                    )}

                    {this.state.user.role==="" ?(
                      <div>
                      <Link to="signup" className="nav-link"><span class="navbar-brand mb-0 h1">Signup</span></Link>
                      </div>   
                    ) :(
                      <div>
                      <Link to="logout" className="nav-link"><span class="navbar-brand mb-0 h1">logout</span></Link>
                      </div>
                    )}
                  

           </nav1>
        )
    }
}
export default Headercomponent;