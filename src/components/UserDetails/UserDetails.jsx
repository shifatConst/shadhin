import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { AdminContext } from '../Context/AdminContext';
import { EmployeeContext } from '../Context/EmployeeContext';
import './UserDetails.css'

const UserDetails = () => {
    const { id } = useParams();
    const [admins] = useContext(AdminContext);
    const [employees] = useContext(EmployeeContext)
    const allUsers = [...admins, ...employees]
    const userFilter = allUsers.filter((user) => user.id === id);
    // console.log(allUsers);
    const { first_name, last_name, division, district, user_type } = userFilter[0];
    return (
        <div className="detailsContainer">
            <h2>User View</h2>
            <hr />
            <div>
                <h3>First Name</h3>
                <p>{first_name}</p>
            </div>
            <div>
                <h3>Last Name</h3>
                <p>{last_name}</p>
            </div>
            <div>
                <h3>User Type</h3>
                <p>{user_type}</p>
            </div>
            <div>
                <h3>Division</h3>
                <p>{division}</p>
            </div>
            <div>
                <h3>District</h3>
                <p>{district}</p>
            </div>
        </div>
    );
};

export default UserDetails;