import { createContext, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([]);
    return (
        <EmployeeContext.Provider value={[employees, setEmployees]}>
            {props.children}
        </EmployeeContext.Provider>
    )
}