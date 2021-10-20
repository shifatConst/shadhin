import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { EmployeeContext } from '../Context/EmployeeContext';


import './Employee.css'

const Employee = () => {
    const history = useHistory();
    const [employees, setEmployees] = useContext(EmployeeContext);

    useEffect(() => {
        axios.get(`https://60f2479f6d44f300177885e6.mockapi.io/users?user_type=${"employee"}`)
            .then(function (response) {
                setEmployees(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const handleOrder = (id) => {
        history.push(`/userDetails/${id}`);
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>District</th>
                    <th>Division</th>
                    <th>Active/Inactive</th>
                    <th>Detail View</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((employee) => {
                        const { first_name, last_name, district, division, id } = employee;

                        return (
                            <tr key={id}>
                                <td>{first_name} {last_name}</td>
                                <td>{district}</td>
                                <td>{division}</td>
                                <td>True</td>
                                <td><button onClick={() => handleOrder(id)} className="btn">Detail View</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default Employee;