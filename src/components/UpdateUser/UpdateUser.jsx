import React from 'react';
import { useParams } from 'react-router';
// import { citiesOfState, filteredDivisions } from '../AddUser/AddUser2';

const UpdateUser = () => {
    const { id } = useParams();
    // console.log(filteredDivisions);
    // console.log(citiesOfState);
    return (
        <div>
            <h1>This is update user page</h1>
        </div>
    );
};

export default UpdateUser;