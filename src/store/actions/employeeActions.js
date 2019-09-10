import axios from 'axios';

export const loadEmployeesSuccess = (employees) => ({
    type: "LOAD_EMPLOYEES_SUCCESS",
    employees,
});

export const loadEmployeesError = (bool) => ({
    type: "LOAD_EMPLOYEES_ERROR",
    error: bool
});

export const addEmployee = (data) =>({
    type: "ADD_EMPLOYEE",
    data,
})

export function itemsFetchData(url) {
    return (dispatch) => {
        axios.get(url)
            .then((res) => dispatch(loadEmployeesSuccess(res.data)))
            .catch(() => dispatch(loadEmployeesError(true)));
    };
}

export function itemsSendData(url, data) {
    return (dispatch) => {
        console.log("data sent", 2)
        axios.post(url, data)
            .then((res) => dispatch(addEmployee(res.data)))
    };
}
