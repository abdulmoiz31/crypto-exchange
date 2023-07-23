import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/loginComponent/login'
import SignupComponent from './components/signup/signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/layout'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function App() {
  const [listedUsers, setListedUsers] = useState([{email: "ahemahem@gmail.com", password: "tada@1234", incorrectAttempts: 0}, {email: "tada@gmail.com", password: "ahem@1234", incorrectAttempts: 0}]);

  const handleUsersUpdate = (updatedUsers) =>{
    setListedUsers(updatedUsers)
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginComponent listedUsers={listedUsers} updateUsers = {handleUsersUpdate}/>} />
        <Route path="login" element={<LoginComponent listedUsers={listedUsers} updateUsers = {handleUsersUpdate}/>} />
        <Route path="signup" element={<SignupComponent listedUsers={listedUsers} updateUsers = {handleUsersUpdate}/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
