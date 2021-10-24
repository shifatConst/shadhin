import React from 'react';
import { useState } from 'react';
import AddUserModal from '../AddUser/AddUserModal';
import Admin from '../Admin/Admin';
import Employee from '../Employee/Employee';
import './Home.css'


const Home = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
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

            <div>
                <div className="top-bar">
                    <h2>User List</h2>
                    <h4><button onClick={openModal} className="btn" >Add User</button></h4>
                </div>
                <AddUserModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
            </div>
            <hr />
            <div className="buttonGroup">
                <h4><button className="btn" onClick={handleToggleAdmin}>Admin User Type</button></h4>
                <h4><button className="btn" onClick={handleToggleUser}>Employee User Type</button></h4>
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