import './App.css';
import Userslist from './components/userslist';
import Headercomponent from './components/Headercomponent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
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


function App() {
  return (
    <div><Router>
     
          
           <Switch>
             
              <Route path ="/" exact component ={HomeComponent}></Route>
               <Route path ="/list" component ={Userslist}></Route>
               <Route path ="/signup"       component ={CreateUserComponent}></Route>
               <div className="container1">
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
               </div>
            
             </Switch>
      
    </Router>
    </div>
  );
}

export default App;
