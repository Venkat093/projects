import React, { Component } from 'react'

export default class abc extends Component {
    render() {
        return (
            <div>
                <section className="container-fluid">
              <section className="row justify-content-center">
                <section className="col-12 col-sm-6 col-md-8">
            <div className="card-body">    
                <form className="form-container">
                <h1>Resgister</h1>
                <div className="form-group">
    <label htmlfor="exampleInputEmail1">Firstname</label>
    <input type="text" className="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter email"
    value={this.state.firstName} onChange={this.changefirstnamehandler}/>
   {/*  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
      <div className="form-group">
    <label for="exampleInputEmail1">Lastname</label>
    <input type="text" class="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter email"
    value={this.state.lastname} onChange={this.changelastnamehandler}/>
      </div>
      <div className="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" className="form-control" id="username1" aria-describedby="emailHelp" placeholder="Enter email"
     value={this.state.username} onChange={this.changeusernamehandler}/>
      </div>

        <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    value={this.state.email} onChange={this.changeemailhandler}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

       <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
    value={this.state.password} onChange={this.changepasswordhandler}/>
      </div>
      <div>
      <label for="exampleInputPassword1">roles</label>
      <input type="text" className="form-control" id="role" placeholder="USER_ROLE,ADMIN_ROLE"
    value={this.state.roles} onChange={this.changeroleshandler}/>
      </div>
      <div>
      <label for="exampleInputPassword1">isactive</label>
      <input type="text" className="form-control" id="active" placeholder="true,false"
    value={this.state.active} onChange={this.changeactivehandler}/>

                                <button  id="btn" className=" btn btn-primary" onClick={this.Save}>SignUp</button>
                                <button id="btn" className="btn btn-danger" onClick={this.Cancel}>cancel</button>
                                <button id="btn" className="btn btn-warning" onClick={this.back}>Back</button>
      </div>
      
      </form>
            </div>
            </section>
      </section>  

</section>   
            </div>
        )
    }
}
