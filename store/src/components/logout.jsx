import React, { Component } from 'react'
import { Link } from "react-router-dom";
import authservices from "../services/authservices"
export default class logout extends Component {
    handleButton = () => {
        authservices.logout();
        this.props.history.push("/");
        window.location.reload();
        
      };
    render() {
        return (
           <React.Fragment>
                <div className="container">
                <div className="container-fluid">
                   <h1>Logged out Successfully</h1>
                   <div className="">
                       <button  onClick={this.handleButton} className="btn-primary">
                      Go Home
                       </button>
                       <button  onClick={this.handleButton} className="btn-primary">
                       <Link to="login">SignIn</Link>
                       </button>
                   </div>
                </div>
            </div>
           </React.Fragment>
        )
    }
}
