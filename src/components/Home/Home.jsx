import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Admin from '../Admin/Admin';
import Employee from '../Employee/Employee';
import './Home.css'


const Home = () => {
    const [toggleAdmin, setToggleAdmin] = useState(false);
    const [toggleUser, setToggleUser] = useState(false);

    const handleToggleAdmin = () => {
        toggleAdmin ? setToggleAdmin(false) : setToggleAdmin(true);
        setToggleUser(false);
    }
    const handleToggleUser = () => {
        toggleUser ? setToggleUser(false) : setToggleUser(true);
        setToggleAdmin(false);
    }
    return (
        <div className="home">
            <div className="top-bar">
                <h2>User List</h2>
                <h4><Link to="/addUser" className="btn" >Add Users</Link></h4>
            </div>
            <hr />
            <div className="buttonGroup">
                <h4><Link to="/" className="btn" onClick={handleToggleAdmin}>Admin User Type</Link></h4>
                <h4><Link to="/" className="btn" onClick={handleToggleUser}>Employee User Type</Link></h4>
            </div>
            {
                toggleAdmin && (
                    <Admin />
                )
            }

            {
                toggleUser && (
                    <Employee />
                )
            }
        </div>
    );
};

export default Home;