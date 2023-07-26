import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Dashboard = ({token}) => {

    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
      }, []);

  return (
    <div>
    <h4>Crypto Exchange Dashboard</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )
}

const mapStateToProps = (state) => {
    debugger;
    return {
      token: state.token.token,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);