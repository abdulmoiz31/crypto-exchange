import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import {updateSignupForm} from '../../actions/updateSignupForm'
import {addUser} from '../../actions/userActions'

const SignupComponent = ({signupForm, listedUsers, updateSignupForm, addUser})=> {
    

   const handleChange = (event) => {
        const { name, value, type } = event.target;
        if (type === 'file') {
          updateSignupForm({ [name]: event.target.files[0] });
        } else {
          updateSignupForm({ [name]: value });
        }
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here, you can access form values from this.state
      //console.log(signupForm)
      var UserIndex = listedUsers.findIndex((user => user.email == signupForm.email));
      if (UserIndex == -1) {
        var newUser = signupForm;
        newUser.incorrectAttempts = 0;
          addUser(newUser);
          showToast("SignUp Successfull", true)  
      }else {
        showToast("Email already registered", false)
      }
    };

    
    const showToast = (message, success)=>{
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
                          <form onSubmit={handleSubmit}>
                          <div className="form-group mb-4">
                            <label className="form-label" htmlFor="name">Name</label>
                              <input type="text" id="name" name="name" className="form-control form-control-lg"
                                placeholder="Enter your name" value={signupForm.name} onChange={handleChange} required/>
                            </div>
                            <div className="form-group mb-4">
                            <label className="form-label" htmlFor="email">Email address</label>
                              <input type="email" id="email" name="email" className="form-control form-control-lg"
                                placeholder="Enter a valid email address" value={signupForm.email} onChange={handleChange} required/>
                            </div>
                            <div className="form-group mb-3">
                            <label className="form-label" htmlFor="password">Password</label>
                              <input type="password" id="password" name="password" value={signupForm.password} className="form-control form-control-lg"
                                placeholder="Enter password" onChange={handleChange} minLength={8} required/>
                            </div>
                            <div className="form-group mb-4">
                            <label className="form-label" htmlFor="address">Home Address</label>
                              <input type="text" id="address" name="address" className="form-control form-control-lg"
                                placeholder="Enter your home address" value={signupForm.address} onChange={handleChange} required/>
                            </div>
                            <div className="form-group mb-4">
                            <label className="form-label" htmlFor="cnicDoc">CNIC Document</label>
                              <input type="file" id="cnicDoc" name="cnicDoc" className="form-control form-control-lg"
                                 onChange={handleChange} required/>
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

    const mapStateToProps = (state) => {
      debugger;
      return {
        signupForm: state.signup.signupForm,
        listedUsers: state.users.listedUsers,
      };
    };

    const mapDispatchToProps = (dispatch) => {
      return {
        updateSignupForm: (signupForm) => dispatch(updateSignupForm(signupForm)),
        addUser: (user)=> dispatch(addUser(user)),
      };
    };


  export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);