import React, { Component } from 'react'

 class updateuserdetails extends Component {
    constructor(props) {
        super(props)

        this.state ={
            username:'',
            password:'',
            firstName:'',
            lastName:'',
            email:'',
            roles:'',
            active:''
            
        }
        this.changeusernamehandler=this.changeusernamehandler.bind(this);
        this.changelastnamehandler=this.changelastnamehandler.bind(this);
        this.changefirstnamehandler=this.changefirstnamehandler.bind(this);
        this.changepasswordhandler=this.changepasswordhandler.bind(this);
        this.changeemailhandler=this.changeemailhandler.bind(this);
        this.changeroleshandler=this.changeroleshandler.bind(this);
        this.changeactivehandler=this.changeactivehandler.bind(this);
        this.back=this.back.bind(this);
        this.Cancel=this.Cancel.bind(this);
        this.update=this.update.bind(this);
    }
    Cancel()
    {
        this.props.history.push('/');
    }
    update()
    {
        
    }

    changeusernamehandler=(event)=>{
        this.setState({username:event.target.value});
    }
    changelastnamehandler=(event)=>{
        this.setState({lastName:event.target.value});
    }
    changefirstnamehandler=(event)=>{
        this.setState({firstName:event.target.value});
    }
    changepasswordhandler=(event)=>{
        this.setState({password:event.target.value});
    }
    changeemailhandler=(event)=>{
        this.setState({email:event.target.value});
    }
    changeroleshandler=(event)=>
    {
        this.setState({roles:event.target.value});
    }
    changeactivehandler=(event)=>{
        this.setState({active:event.target.value});
    }
    back()
    {
        this.props.history.push('/login')
    }
    
    
    render() {
        return (
            <div>
                <div className="card-body">
                
                <form>
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
      <label for="exampleInputPassword1">roles</label>
      <input type="text" className="form-control" id="active" placeholder="true,false"
    value={this.state.active} onChange={this.changeactivehandler}/>

                                <button className="btn btn-primary" onClick={this.update}>edit_details</button>
                                <button className="btn btn-danger" onClick={this.Cancel}>cancel</button>
                                <button className="btn btn-warning" onClick={this.back}>Back</button>
      </div>
      
      </form>
            </div>
            </div>
        )
    }
}
export default  updateuserdetails;