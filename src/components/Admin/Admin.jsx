import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { AdminContext } from '../Context/AdminContext';

const Admin = () => {
    const history = useHistory();
    const [admins, setAdmins] = useContext(AdminContext);

    useEffect(() => {
        axios.get("https://60f2479f6d44f300177885e6.mockapi.io/users?user_type=admin")
            .then(function (response) {
                setAdmins(response.data);
                // console.log(response.data);
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
                    admins.map((admin) => {
                        const { first_name, last_name, district, division, id } = admin;

                        return (
                            <tr key={id}>
                                <td>{first_name} {last_name}</td>
                                <td>{district}</td>
                                <td>{division}</td>
                                {
                                    //if the admin's district is Ramna it will show true as active/inactive status.
                                    admin.district === "Ramna" ? (
                                        <td>True</td>
                                    )
                                        :
                                        (
                                            <td>False</td>
                                        )
                                }
                                <td><button onClick={() => handleOrder(id)} className="btn">Detail View</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default Admin;