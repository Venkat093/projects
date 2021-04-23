import './App.css';
import Userslist from './components/userslist';
import Headercomponent from './components/Headercomponent';
import {BrowserRouter as Router,Route, Redirect,Switch} from 'react-router-dom';
import CreateUserComponent from './components/CreateUserComponent';
import HomeComponent from './components/HomeComponent';
import viewproducts from './components/viewproducts';
import productslist from './components/productslist';
import product from './components/product';
import login from './components/login';
import addproducts from './components/addproducts';
import cartpage from './components/cartpage';
import Admin from './components/Admin';
import updateproduct from './components/updation/updateproduct';
import Adminproducts from './components/Adminproducts';
import brandlist from './components/brandlist';
import demo from './components/demo';
import addblogs from './components/addblogs';
import blogs from './components/blogs';
import updateblog from './components/updateblog';
import Adminhome from './components/Adminhome';
import ublogs from './components/ublogs';
import Adminproduct from './components/Adminproduct';
import { Component } from 'react';
import authservices from './services/authservices';
import React from 'react';
import logout from './components/logout';


class App extends Component{

  
 state={
   user: {
     username:"",
     jwt:"",
     role: "",
   },
 };
 componentDidMount()
 {
   let user=authservices.getCurrentUser();
   if (user === null) {
    let username = "";
    let jwt = "";
    let role = "";
    this.setState({ username, jwt, role });
  } else {
    this.setState({ user });
  }
 }

 render() {
  let { user } = this.state;
  return(
    <React.Fragment>
      <Router> 
      <Switch>
      
            {user.role==="ROLE_ADMIN" ? (
                <Route path="/" exact component={Adminhome}></Route>
            )  :(
                <Route path ="/" exact component ={HomeComponent}></Route>
            )}
               
               <Route path ="/list" component ={Userslist}></Route>
               <Route path ="/signup"       component ={CreateUserComponent}></Route>
               <Route path="/products"       component ={productslist}></Route>
               <Route path="/product/:id"    component={product}></Route>
               <Route path="/login"          component={login}></Route>
               <Route path="/addproduct"     component={addproducts}></Route>
               <Route path="/cart"           component={cartpage}></Route>
               <Route path="/Admin"          component={Admin}></Route>
               <Route path="/updateproduct/:id"  component={updateproduct}></Route>
               <Route path="/Adminproducts"  component={Adminproducts}></Route>
               <Route path="products/:brand" component={brandlist}></Route>
               <Route path="/addblog" component={addblogs}></Route>
               <Route path="/blogs"          component={blogs}></Route>
               <Route path="/updateblog/:id"  component={updateblog}></Route>
               <Route path="/ublogs" component={ublogs}></Route>
               <Route path="/adminproduct:id" component={Adminproduct}></Route>
               <Route path="/logout" component={logout}></Route>
               <Redirect exact from="/home" to="/" />
               
      </Switch>
      </Router> 
    </React.Fragment>
  );

}
}

export default App;






















