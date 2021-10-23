import { City } from 'country-state-city';

export const validate = values => {
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

export const getStateCode = (stateName) => {
    let stateCode;
    if (stateName === "Dhaka") {
        stateCode = "13";
    }
    if (stateName === "Chittagong") {
        stateCode = "B";
    }
    if (stateName === "Barisal") {
        stateCode = "06";
    }
    if (stateName === "Khulna") {
        stateCode = "27";
    }
    if (stateName === "Sylhet") {
        stateCode = "60";
    }
    if (stateName === "Rajshahi") {
        stateCode = "54";
    }
    return stateCode;
}