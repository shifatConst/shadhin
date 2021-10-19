import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
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
                    <td>Mohian</td>
                    <td>Narail</td>
                    <td>Khulna</td>
                    <td>True</td>
                    <td><Link to="/" className="btn">Detail View</Link></td>
                </tr>
                <tr>
                    <td>Mohian</td>
                    <td>Narail</td>
                    <td>Khulna</td>
                    <td>True</td>
                    <td><Link to="/" className="btn">Detail View</Link></td>
                </tr>
                <tr>
                    <td>Mohian</td>
                    <td>Narail</td>
                    <td>Khulna</td>
                    <td>True</td>
                    <td><Link to="/" className="btn">Detail View</Link></td>
                </tr>
                <tr>
                    <td>Mohian</td>
                    <td>Narail</td>
                    <td>Khulna</td>
                    <td>True</td>
                    <td><Link to="/" className="btn">Detail View</Link></td>
                </tr>
            </tbody>
        </table>
    );
};

export default Admin;