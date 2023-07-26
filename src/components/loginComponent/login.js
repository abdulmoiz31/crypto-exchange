import React, { useEffect } from "react";
import './login.css'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {updateLoginForm} from '../../actions/updateLoginForm'
import {setToken, removeToken} from '../../actions/tokenActions'
import { updateUser } from "../../actions/userActions";

const LoginComponent = ({listedUsers, updateLoginForm, setToken, loginForm, removeToken, updateUser}) => {
    
    const navigate = useNavigate();

    useEffect(() => {
      removeToken();
    }, []);

    const handleChange = (event) => {
      const { name, value } = event.target;
      updateLoginForm({[name]: value });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here, you can access form values from this.state

      var UserIndex = listedUsers.findIndex((user => user.email == loginForm.email));
      if (UserIndex != -1) {
        if (listedUsers[UserIndex].password == loginForm.password && listedUsers[UserIndex].incorrectAttempts < 3) {
          var updatedUsers = listedUsers;
          updatedUsers[UserIndex].incorrectAttempts = 0
          var updatedUser = {property: 'incorrectAttempts', index: UserIndex, value: 0};
          updateUser(updatedUser);
          showToast("Login Successfull", true);
          setToken("authorized");
          navigate('/dashboard')
        } else if (listedUsers[UserIndex].incorrectAttempts == 3) {
          showToast("User is blocked", false)
        } else {
          var updatedUser = {property: 'incorrectAttempts', index: UserIndex, value: listedUsers[UserIndex].incorrectAttempts + 1};
          updateUser(updatedUser);
          showToast("Incorrect Password", false)
        }
      }
      else{
        showToast("Email Not Registered", false)
      }
    };

    

    const showToast =  (message, success)=>{
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
                          <form onSubmit={handleSubmit}>
                            <div className="form-group mb-4">
                            <label className="form-label" htmlFor="form3Example3">Email address</label>
                              <input type="email" id="form3Example3" name="email" className="form-control form-control-lg"
                                placeholder="Enter a valid email address" value={loginForm.email} onChange={handleChange} />
                            </div>
                            <div className="form-group mb-3">
                            <label className="form-label" htmlFor="form3Example4">Password</label>
                              <input type="password" id="form3Example4" name="password" value={loginForm.password} className="form-control form-control-lg"
                                placeholder="Enter password" onChange={handleChange} minLength={8} />
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

    const mapStateToProps = (state) => {
      debugger;
      return {
        loginForm: state.login.loginForm,
        listedUsers: state.users.listedUsers,
      };
    };

    const mapDispatchToProps = (dispatch) => {
      return {
        updateLoginForm: (loginForm) => dispatch(updateLoginForm(loginForm)),
        setToken: (token)=> dispatch(setToken(token)),
        removeToken: ()=> dispatch(removeToken()),
        updateUser: (user)=> dispatch(updateUser(user))
      };
    };


  export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);