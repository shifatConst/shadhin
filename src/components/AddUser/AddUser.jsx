import { Form, Formik } from 'formik';
import React from 'react';

const AddUser = () => {

    return (
        <Formik
            initialValues={{
                first_name: '',
                last_name: '',
                user_type: '',
                division: '',
                district: ''
            }}
        >
            {formik => (
                <div>
                    <h2>New User</h2>
                    {console.log(formik)}
                    <Form>

                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default AddUser;