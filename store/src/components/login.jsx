import React, { Component } from 'react';
import '../App.css';
import authservices from '../services/authservices';
//226

 class login extends Component {
    constructor(props) {
        super(props)

        this.state ={
            data: {
                username: "",
                password: "",
              },
        }
        
        this.adduser=this.adduser.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.changeusername=this.changeusername.bind(this);
        this.changepassword=this.changepassword.bind(this);
        
    }
    adduser()
    {
      this.props.history.push('/signup'); 
    }
   
    changeusername=(e)=>{
        this.setState({username:e.target.value});
    }
    changepassword=(e)=>{
        this.setState({password:e.target.value});
    }
    handleChange = ({ target }) => {
        const { data } = { ...this.state };
        data[target.name] = target.value;
        this.setState({ data });
      };
    handleSubmit=async(e)=>{
        try{e.preventDefault();
            if(true){
                await authservices.login(this.state.data).then(()=>{
                    this.props.history.push("/home");
                    console.log('user=>' +JSON.stringify(this.state.data));
                    window.location.reload();
          alert("Logged In Successfully");
                });
               
            }else {
                this.validator.showMessages();
              }
        }catch (e) {
            console.log(e);
          }
    };
   
    render() {
        return (
           /*  <div className="row">
            <div className="box col-md-6">
        
            </div>
            <div className="box col-md-6">
            <div className="login-div">
                <div className="title"></div>
                <div className="sub-title"></div>
                <div className="fields">
                <div class="username"><input type="text" name="username" class="user-input" placeholder="username" value={this.state.data.username} onChange={this.handleChange} /></div>
                <div class="password"><input type="password" name ="password" class="pass-input" placeholder="password" value={this.state.data.password} onChange={this.handleChange} /></div>
                </div>
                <button class="signin-button" onClick={this.handleSubmit}>Login</button>
                <div class="link">
                <a onClick={this.adduser} href="#">Sign up</a>
                </div>
            </div>
            
        </div>
        </div>  */
        
            <div className="logincomponent">
         <section className="Form my-4 mx-5">
             <div className="container">
                 <div className="row logrow no-gutters">
                     <div className="col-md-5">

                         <img  src="https://specials-images.forbesimg.com/imageserve/607adfe1002bb9f167a69507/960x0.jpg?fit=scale" alt="sd"className="logimg"></img>
                     </div>
                     <div className="col-md-7 px-5 pt-5">
                         <h1>LogIn</h1>
                         <h4>Sign into your account</h4>
                         <form>
                           <div className="form-row">
                            <div className="col-lg-7">
                            <div ><input type="text" name="username" className="form-controle my-3 p-2" placeholder="username" value={this.state.data.username} onChange={this.handleChange} /></div>
                            </div>
                            </div> 
                            <div className="form-row">
                            <div className="col-lg-7">
                            <div ><input type="password" name ="password" class="form-controle my-3 p-2" placeholder="password" value={this.state.data.password} onChange={this.handleChange} /></div>
                            </div>
                            </div> 
                            <div className="form-row">
                            <div className="col-lg-7">
                            <button className="btn btn-dark" onClick={this.handleSubmit}>Login</button>
                           
                            </div>
                            </div>  
                            <p>Dont have an account? <button className="btn-primary" onClick={this.adduser} href="#">Sign up</button></p>
                         </form>
                     </div>

                 </div>
             </div>
         </section>
         </div> 
        
        )
            
 
           
           
        
    }
}
export default  login;
