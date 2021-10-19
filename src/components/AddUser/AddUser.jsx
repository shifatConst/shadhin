import React from 'react';
import { Country, State, City } from 'country-state-city';
const AddUser = () => {
    const states = State.getStatesOfCountry("BD");
    // console.log(states);
    // iso code is the state code

    // const divFilter = states.filter((state) => state.name.includes('Division'));
    // console.log(divFilter);

    const divisions = City.getCitiesOfCountry("BD");
    // console.log(divisions);
    const divisionsFilter = divisions.filter(function (v, i) {
        return (v["name"] === "Dhaka" || v["name"] === "Chittagong" || v["name"] === "Barisal" || v["name"] === "Khulna" || v["name"] === "Sylhet" || v["name"] === "Rajshahi");
    });
    console.log(divisionsFilter);

    const allCities = City.getCitiesOfState("BD", "13");
    console.log(allCities);

    // states.forEach((state) => {
    //     const stateName = state.name;
    //     console.log(stateName);
    //     const divFilter = stateName.filter()

    // });
    // const allStates = State.getAllStates();
    // console.log(allStates);
    // allStates.map((state) => console.log(state.name));
    // console.log(Country.getAllCountries());
    // console.log(State.getAllStates()[0]);
    return (
        <div>
            <h1>This is modal for add user</h1>
        </div>
    );
};

export default AddUser;