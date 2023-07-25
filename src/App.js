import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/loginComponent/login'
import SignupComponent from './components/signup/signup'
import Blog from './components/blogs/blog'

import Dashboard from './components/dashboard/dashboard'
import About from './components/about/about'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/layout'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function App() {
  const [listedUsers, setListedUsers] = useState([{email: "ahemahem@gmail.com", password: "tada@1234", incorrectAttempts: 0}, {email: "tada@gmail.com", password: "ahem@1234", incorrectAttempts: 0}]);
  const [token, setToken] = useState("");

  const handleUsersUpdate = (updatedUsers) =>{
    setListedUsers(updatedUsers)
  }

  const setUserToken = (userToken) => {
    setToken(userToken)
  }

  return (
    <BrowserRouter>
    <Routes>
    <Route path="login" element={<LoginComponent listedUsers={listedUsers} setToken = {setUserToken} updateUsers = {handleUsersUpdate}/>} />
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<LoginComponent listedUsers={listedUsers} updateUsers = {handleUsersUpdate}/>} /> */}
        <Route path="signup" element={<SignupComponent listedUsers={listedUsers} updateUsers = {handleUsersUpdate}/>} />
        <Route path="blogs" element={<Blog />} />
        <Route index path="dashboard" element={<Dashboard token={token}/>} />
        <Route index path="about" element={<About/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
