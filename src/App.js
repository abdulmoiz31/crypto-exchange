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
import TransferCoin from './components/dashboard/transferCoin'
import Protected from './authGuards/ProtectedRoute';
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector((state) => state.token.token);
  return (
    <BrowserRouter>
    <Routes>
    <Route path="login" element={<LoginComponent/>} />
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<LoginComponent listedUsers={listedUsers} updateUsers = {handleUsersUpdate}/>} /> */}
        <Route path="signup" element={<SignupComponent/>} />
        <Route path="blogs" element={ <Protected isLoggedIn={token}><Blog /></Protected> } />
        
        
        <Route index path="dashboard" element={<Protected isLoggedIn={token}><Dashboard /></Protected>} />
        <Route index path="dashboard/transfer" element={<TransferCoin/>} />
        
        <Route index path="about" element={<About/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
