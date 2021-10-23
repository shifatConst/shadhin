import React from 'react';
import { useFormik } from 'formik';
import { City } from 'country-state-city';
import { filteredDivisions, getStateCode, validate } from './Utility';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddUser = () => {
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            user_type: '',
            division: '',
            district: '',
        },
        validate,
        onSubmit: values => {
            axios.post('https://60f2479f6d44f300177885e6.mockapi.io/users', values)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            formik.handleReset();
        },
    });

    const stateCode = getStateCode(formik.values.division);
    let citiesOfState = City.getCitiesOfState("BD", stateCode);

    return (
        <div>
            <div className="top-bar">
                <h2>Profile Information: Create</h2>
            </div>
            <hr />
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.first_name}
                    />
                    {formik.touched.first_name && formik.errors.first_name ? (
                        <div>{formik.errors.first_name}</div>
                    ) : null}
                    <br />


                    <label htmlFor="last_name">Last Name</label>
                    <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.last_name}
                    />
                    {formik.touched.last_name && formik.errors.last_name ? (
                        <div>{formik.errors.last_name}</div>
                    ) : null}
                    <br />


                    <label htmlFor="user_type">User Type</label>
                    <select
                        id="user_type"
                        name="user_type"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.user_type}
                    >
                        <option value="">Select User</option>
                        <option value="admin">Admin</option>
                        <option value="employee">Employee</option>
                    </select>
                    {formik.touched.user_type && formik.errors.user_type ? (
                        <div>{formik.errors.user_type}</div>
                    ) : null}
                    <br />

                    {formik.values.user_type === "employee" ? (
                        <div>
                            <label htmlFor="division">Division</label>
                            <select
                                id="division"
                                name="division"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.division}
                            >
                                <option value="">Select Division</option>
                                {
                                    filteredDivisions.map((division) => {
                                        return (
                                            <option value={division.name}>{division.name}</option>
                                        )
                                    })
                                }
                            </select>
                            {formik.touched.division && formik.errors.division ? (
                                <div>{formik.errors.division}</div>
                            ) : null}
                            <br />

                            <label htmlFor="district">Division</label>
                            <select
                                id="district"
                                name="district"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.district}
                            >
                                <option value="">Select District</option>
                                {
                                    citiesOfState.map((city) => {
                                        return (
                                            <option value={city.name}>{city.name}</option>
                                        )
                                    })
                                }
                            </select>
                            {formik.touched.district && formik.errors.district ? (
                                <div>{formik.errors.district}</div>
                            ) : null}
                            <br />
                        </div>
                    ) : null}

                    <div>
                        <h4><Link to="/" className="btn" >Back</Link></h4>
                        <button type="submit">Submit</button>
                    </div>

                </form>
            </div>
        </div>

    );
};

export default AddUser;