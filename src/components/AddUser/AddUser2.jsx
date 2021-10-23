import React from 'react';
import { useFormik } from 'formik';
import { Country, State, City } from 'country-state-city';

const validate = values => {
    const errors = {};

    if (!values.first_name) {
        errors.first_name = 'Required';
    } else if (values.first_name.length > 15) {
        errors.first_name = 'Must be 15 characters or less';
    }

    if (!values.last_name) {
        errors.last_name = 'Required';
    } else if (values.last_name.length > 20) {
        errors.last_name = 'Must be 20 characters or less';
    }

    if (!values.user_type) {
        errors.user_type = 'Required';
    }

    if (values.user_type === "employee" && !values.division) {
        errors.division = 'Required';
    }

    if (values.user_type === "employee" && !values.district) {
        errors.district = 'Required';
    }

    return errors;
};

const divisions = City.getCitiesOfCountry("BD");
export const filteredDivisions = divisions.filter(function (v) {
    return (v["name"] === "Dhaka" || v["name"] === "Chittagong" || v["name"] === "Barisal" || v["name"] === "Khulna" || v["name"] === "Sylhet" || v["name"] === "Rajshahi");
});

const AddUser2 = () => {


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
            console.log(values);
            formik.handleReset();
        },
    });
    let stateCode;
    if (formik.values.division === "Dhaka") {
        stateCode = "13";
    }
    if (formik.values.division === "Chittagong") {
        stateCode = "B";
    }
    if (formik.values.division === "Barisal") {
        stateCode = "06";
    }
    if (formik.values.division === "Khulna") {
        stateCode = "27";
    }
    if (formik.values.division === "Sylhet") {
        stateCode = "60";
    }
    if (formik.values.division === "Rajshahi") {
        stateCode = "54";
    }

    let citiesOfState = City.getCitiesOfState("BD", stateCode);

    return (
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




            <button type="submit">Submit</button>
        </form>
    );
};

export default AddUser2;