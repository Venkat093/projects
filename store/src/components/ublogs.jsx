import React, { Component } from 'react'
import blogservices from '../services/blogservices';
import Headercomponent from './Headercomponent';
import Footercomponent from './footercomponent';
export default class ublogs extends Component {
    constructor(props) {
        super(props)

        this.state ={
            blogs:[],
            
        }
       
      
      
    }
    componentDidMount()
    {
        blogservices.getproducts().then((res) => {
            this.setState({blogs :res.data});
        });
    } 
    
    render() {
        return (
            <React.Fragment>
                  <Headercomponent /> 
            
             <div  id="blogbody" className="container mt-5">
                 <div className="container-flud">
                    <div className="blogwal">

                      <div>
                         <img className="blogimg" src="https://techguff.com/wp-content/uploads/2019/12/nokia-9.1.jpg" alt=""></img>
                      </div>

                      <div >
                          {this.state.blogs.map(blog=>
                               <div class="row">
                               <div class="col-md-7 mt-5">
                                 <h4>{blog.headline}</h4>
                                 <h2>{blog.productname}</h2>
                                 <p className="para">{blog.discription}</p>
                                 
                              </div>
                                <div id="box" class="box col-md-3 ml-4 mt-5 p-2 "><img id="boximg" src={blog.img} alt=""/></div>
                               </div>
                            )}
                      </div>
                    
                    </div> 
                 </div>

             </div>
             <Footercomponent /> 
         </React.Fragment>
        )
    }
}
