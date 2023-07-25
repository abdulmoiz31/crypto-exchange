import React from "react";
import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';

class SignupComponent extends Component{
    constructor(){
        super();
        this.state = {
          email: '',
          name: '',
          password: '',
          address: '',
          cnicDoc: null,
          userBlocked: false,
        }
    }

    handleChange = (event) => {
        const { name, value, type } = event.target;
        if (type === 'file') {
          this.setState({ [name]: event.target.files[0] });
        } else {
          this.setState({ [name]: value });
        }
    };

    handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here, you can access form values from this.state

      var UserIndex = this.props.listedUsers.findIndex((user => user.email == this.state.email));
      if (UserIndex == -1) {
          var updatedUsers = this.props.listedUsers;
          updatedUsers.push({email: this.state.email, password: this.state.password, incorrectAttempts: 0})
          this.showToast("SignUp Successfull", true)  
      }else {
        this.showToast("Email already registered", false)
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
        return <div>
                  <section className="vh-100">
                    <div className="container-fluid h-custom">
                      <div className="row d-flex justify-content-center align-items-center h-100">
                      <h4 className="text-center mb-5">User Sign Up</h4>
                        <div className="col-md-9 col-lg-6 col-xl-5">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image"/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" >
                          <form onSubmit={this.handleSubmit}>
                          <div className="form-group mb-4">
                            <label className="form-label" htmlFor="name">Name</label>
                              <input type="text" id="name" name="name" className="form-control form-control-lg"
                                placeholder="Enter your name" value={this.state.name} onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group mb-4">
                            <label className="form-label" htmlFor="email">Email address</label>
                              <input type="email" id="email" name="email" className="form-control form-control-lg"
                                placeholder="Enter a valid email address" value={this.state.email} onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group mb-3">
                            <label className="form-label" htmlFor="password">Password</label>
                              <input type="password" id="password" name="password" value={this.state.password} className="form-control form-control-lg"
                                placeholder="Enter password" onChange={this.handleChange} minLength={8} required/>
                            </div>
                            <div className="form-group mb-4">
                            <label className="form-label" htmlFor="address">Home Address</label>
                              <input type="text" id="address" name="address" className="form-control form-control-lg"
                                placeholder="Enter your home address" value={this.state.address} onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group mb-4">
                            <label className="form-label" htmlFor="cnicDoc">CNIC Document</label>
                              <input type="file" id="cnicDoc" name="cnicDoc" className="form-control form-control-lg"
                                 onChange={this.handleChange} required/>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                              <button type="submit" className="btn btn-primary btn-lg"
                                styles="{{padding-left : 2.5rem, padding-right : 2.5rem}}">Sign Up</button>
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

export default SignupComponent;