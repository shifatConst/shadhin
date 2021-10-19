import React from 'react';
import { Link } from 'react-router-dom';
import './Employee.css'

const Employee = () => {
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
                <tr>
                    <td>Shifat</td>
                    <td>Narail</td>
                    <td>Khulna</td>
                    <td>True</td>
                    <td><Link to="/" className="btn">Detail View</Link></td>
                </tr>
                <tr>
                    <td>Shifat</td>
                    <td>Narail</td>
                    <td>Khulna</td>
                    <td>True</td>
                    <td><Link to="/" className="btn">Detail View</Link></td>
                </tr>
                <tr>
                    <td>Shifat</td>
                    <td>Narail</td>
                    <td>Khulna</td>
                    <td>True</td>
                    <td><Link to="/" className="btn">Detail View</Link></td>
                </tr>
                <tr>
                    <td>Shifat</td>
                    <td>Narail</td>
                    <td>Khulna</td>
                    <td>True</td>
                    <td><Link to="/" className="btn">Detail View</Link></td>
                </tr>
            </tbody>
        </table>
    );
};

export default Employee;