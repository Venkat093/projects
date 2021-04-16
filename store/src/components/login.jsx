import React, { Component } from 'react';
import '../App.css';
//226

 class login extends Component {
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
<div className="row">
    <div className="box col-md-6">

    </div>
    <div className="box col-md-6">
    <div className="login-div">
        <div className="title"></div>
        <div className="sub-title"></div>
        <div className="fields">
        <div class="username"><input type="username" class="user-input" placeholder="username" /></div>
        <div class="password"><input type="password" class="pass-input" placeholder="password" /></div>
        </div>
        <button class="signin-button">Login</button>
        <div class="link">
        <a onClick={this.adduser} href="#">Sign up</a>
        </div>
    </div>
    
</div>
</div>
           
           
        )
    }
}
export default  login;
