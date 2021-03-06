import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { AdminContext } from '../Context/AdminContext';
import { EmployeeContext } from '../Context/EmployeeContext';
import './UserDetails.css'

export let allUsers2;
const UserDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const [admins] = useContext(AdminContext);
    const [employees] = useContext(EmployeeContext)
    const allUsers = [...admins, ...employees]


    const userFilter = allUsers.filter((user) => user.id === id);

    const handleUpdate = (id) => {
        history.push(`/updateUser/${id}`)
    }

    const { first_name, last_name, division, district, user_type } = userFilter[0];
    return (
        <div className="detailsContainer">
            <h2>User View</h2>
            <hr />
            <div>
                <h4>First Name</h4>
                <p>{first_name}</p>
            </div>
            <div>
                <h4>Last Name</h4>
                <p>{last_name}</p>
            </div>
            <div>
                <h4>User Type</h4>
                <p>{user_type}</p>
            </div>
            <div>
                <h4>Division</h4>
                <p>{division}</p>
            </div>
            <div>
                <h4>District</h4>
                <p>{district}</p>
            </div>
            <div>
                <Link to="/" className="addUserCancel">Back</Link>
                <button onClick={() => handleUpdate(id)} className="addUserBtn">Edit</button>
            </div>
        </div>
    );
};

export default UserDetails;