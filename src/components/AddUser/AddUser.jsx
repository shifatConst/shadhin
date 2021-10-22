import { Field, Form, Formik } from 'formik';
import { Country, State, City } from 'country-state-city';
import React from 'react';
import axios from 'axios'

const validate = values => {
    const errors = {};

    if (!values.first_name) {
        errors.first_name = 'Required';
    } else if (values.first_name.length > 15) {
        errors.first_name = "Must be 15 characters or less"
    }
    if (!values.last_name) {
        errors.last_name = 'Required';
    } else if (values.last_name.length > 15) {
        errors.last_name = "Must be 15 characters or less"
    }
    if (!values.user_type) {
        errors.last_name = 'Required';
    }
    if (!values.division) {
        errors.division = 'Required';
    }
    if (!values.district) {
        errors.district = 'Required';
    }

}

const AddUser = () => {
    const divisions = City.getCitiesOfCountry("BD");
    const filteredDivisions = divisions.filter(function (v) {
        return (v["name"] === "Dhaka" || v["name"] === "Chittagong" || v["name"] === "Barisal" || v["name"] === "Khulna" || v["name"] === "Sylhet" || v["name"] === "Rajshahi");
    });



    let stateCode;
    let citiesOfState;
    // let citiesOfState = City.getCitiesOfState("BD", "13");
    // console.log(citiesOfState);
    return (
        <Formik
            initialValues={{
                first_name: '',
                last_name: '',
                user_type: '',
                division: '',
                district: '',

            }}
            onSubmit={(values) => {
                axios.post('https://60f2479f6d44f300177885e6.mockapi.io/users', values)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                // console.log(values);
            }}
        >
            <Form>
                <label htmlFor="">First Name:</label>
                <Field name="first_name" type="text" />
                <br />
                <label htmlFor="">Last Name:</label>
                <Field name="last_name" type="text" />
                <br />
                <label>User Type</label>
                <Field name="user_type" as="select">
                    <option value="">Select Admin</option>
                    <option value="admin">Admin</option>
                    <option value="employee">Employee</option>
                </Field>
                <br />
                <label>Division</label>
                <Field name="division" as="select">
                    {
                        filteredDivisions.map((division) => {
                            stateCode = division.stateCode;
                            citiesOfState = City.getCitiesOfState("BD", stateCode);
                            return (
                                <option value={division.name}>
                                    {division.name}
                                </option>
                            )
                        })
                    }
                </Field>
                <br />
                <label>District</label>
                <Field name="district" as="select">
                    {citiesOfState.map((city) => {

                        return (
                            <option value={city.name}>
                                {city.name}
                            </option>
                        )
                    })
                    }
                </Field>

                <br />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default AddUser;