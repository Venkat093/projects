import React, { Component } from 'react'
import userservice from '../services/userservice'
import {Link} from "react-router-dom";
 class userslist extends Component {
     constructor(props) {
         super(props)

         this.state ={
             users: []
         }
     }
     componentDidMount()
     {
         userservice.getusers().then((res) => {
             this.setState({users :res.data});
         });
     }
    render() {
        return (
            <div>
                <h2 className="text-center">userslist</h2>
                <Link to ="Admin">Back</Link>

             <div className="row">
               <tatble className="table striped bordered hover">
                   <thead>
                       <tr>
                           <th>Firstname</th>
                           <th>Last name</th>
                           <th>username</th>
                           <th>roles</th>
                           <th>email</th>
                          
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.users.map(
                            user =>
                            <tr key ={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.username}</td>
                                <td>{user.roles}</td>
                                <td>{user.email}</td>
                              
                            </tr>
                           )
                       }
                   </tbody>
               </tatble>
               </div>
            </div>
        )
    }
}

export default userslist;