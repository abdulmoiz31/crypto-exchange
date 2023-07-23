import React from "react";
import { Component } from "react";
import './login.css'
import { ToastContainer, toast } from 'react-toastify';

class LoginComponent extends Component{
    constructor(){
        super();
        this.state = {
          email:'',
          password: '',
          userBlocked: false,
          listedUsers: [{email: "ahemahem@gmail.com", password: "tada@1234", incorrectAttempts: 0}, {email: "tada@gmail.com", password: "ahem@1234", incorrectAttempts: 0}]
        }
    }

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here, you can access form values from this.state

      var UserIndex = this.props.listedUsers.findIndex((user => user.email == this.state.email));
      if (UserIndex != -1) {
        if (this.props.listedUsers[UserIndex].password == this.state.password && this.props.listedUsers[UserIndex].incorrectAttempts < 3) {
          var updatedUsers = this.props.listedUsers;
          updatedUsers[UserIndex].incorrectAttempts = 0
          this.props.updateUsers(updatedUsers);
          this.showToast("Login Successfull", true)

        } else if (this.props.listedUsers[UserIndex].incorrectAttempts == 3) {
          this.showToast("User is blocked", false)
        } else {
          var updatedUsers = this.props.listedUsers;
          updatedUsers[UserIndex].incorrectAttempts = this.props.listedUsers[UserIndex].incorrectAttempts + 1;
          this.props.updateUsers(updatedUsers);
          
          this.showToast("Incorrect Password", false)
        }
      }
      else{
        this.showToast("Email Not Registered", false)
      }
    };

    

    showToast(message, success){
      if (success) {
        toast.success(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else {
        toast.error(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }

    render(){
        return <div className="rootDiv">
                  <section className="vh-100">
                    <div className="container-fluid h-custom">
                      <div className="row d-flex justify-content-center align-items-center h-100">
                      <h4 className="text-center mb-5">User Login</h4>
                        <div className="col-md-9 col-lg-6 col-xl-5">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image"/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" >
                          <form onSubmit={this.handleSubmit}>
                            <div className="form-group mb-4">
                            <label className="form-label" htmlFor="form3Example3">Email address</label>
                              <input type="email" id="form3Example3" name="email" className="form-control form-control-lg"
                                placeholder="Enter a valid email address" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="form-group mb-3">
                            <label className="form-label" htmlFor="form3Example4">Password</label>
                              <input type="password" id="form3Example4" name="password" value={this.state.password} className="form-control form-control-lg"
                                placeholder="Enter password" onChange={this.handleChange} minLength={8} />
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                              <button type="submit" className="btn btn-primary btn-lg"
                                styles="{{padding-left : 2.5rem, padding-right : 2.5rem}}">Login</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>
                  <ToastContainer />
                </div>
    }
}

export default LoginComponent;