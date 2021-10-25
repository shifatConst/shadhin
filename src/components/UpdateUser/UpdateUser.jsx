import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { AdminContext } from '../Context/AdminContext';
import { EmployeeContext } from '../Context/EmployeeContext';
import { filteredDivisions, getStateCode } from '../AddUser/Utility'
import { City } from 'country-state-city';
import axios from 'axios';
import './UpdateUser.css'
import { Link } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [admins] = useContext(AdminContext);
    const [employees] = useContext(EmployeeContext)
    const allUsers = [...admins, ...employees]
    const currentUser = allUsers.filter((user) => user.id === id);
    const { first_name, last_name, user_type, division, district } = currentUser[0];

    const [userUpdate, setUserUpdate] = useState({
        first_name: first_name,
        last_name: last_name,
        user_type: user_type,
        division: division,
        district: district,
        id: id
    })
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserUpdate({ ...userUpdate, [name]: value })
    }
    const handleUpdateUser = (e) => {
        e.preventDefault();
        axios.put(`https://60f2479f6d44f300177885e6.mockapi.io/users/${id}`, userUpdate)
            .then(function (response) {
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        setUserUpdate({
            first_name: "",
            last_name: "",
            user_type: "",
            division: "",
            district: "",
            id: ""
        })
    }

    const stateCode = getStateCode(userUpdate.division);
    let citiesOfState = City.getCitiesOfState("BD", stateCode);
    return (
        <div>
            <h2>Users Update</h2>
            <hr />
            <form className="updateData" onSubmit={handleUpdateUser}>

                <label htmlFor="">First Name</label>
                <input type="text" name="first_name" id="first_name" placeholder="First name"
                    value={userUpdate.first_name}
                    onChange={handleInput} />

                <label htmlFor="">Last Name</label>
                <input type="text" name="last_name" id="last_name" placeholder="Last name"
                    value={userUpdate.last_name}
                    onChange={handleInput} />

                <label htmlFor="">Division</label>
                <select name="division" id="division"
                    value={userUpdate.division}
                    onChange={handleInput}>
                    <option value="">Select your Division</option>
                    {
                        filteredDivisions.map((division) => {
                            return (
                                <option value={division.name}>{division.name}</option>
                            )
                        })
                    }
                </select>

                <label htmlFor="">District</label>
                <select name="district" id="district"
                    value={userUpdate.district}
                    onChange={handleInput}>
                    <option value="">Select your district</option>
                    {
                        citiesOfState.map((district) => {
                            return (
                                <option value={district.name}>{district.name}</option>
                            )
                        })
                    }
                </select>
                <div>
                    <Link to="/" className="addUserCancel">Back</Link>
                    <button className="addUserBtn" type="submit">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;