import axios from 'axios';

export const loadEmployeesStart = (boolean) => ({
    type: "LOAD_EMPLOYEES_START",
    boolean
});


export const loadEmployeesSuccess = (employees) => ({
    type: "LOAD_EMPLOYEES_SUCCESS",
    employees,
});

export const loadEmployeesError = (error) => ({
    type: "LOAD_EMPLOYEES_ERROR",
    error
});


export function itemsFetchData(url) {

    return (dispatch) => {
        dispatch(loadEmployeesStart());
        axios.get(url)
        .then(res =>{
            dispatch(loadEmployeesStart(true))
        })
        .then(res => {
            dispatch(loadEmployeesSuccess(res.data))
            console.log(res.data)
        })
        .catch(error =>{
            dispatch(loadEmployeesError(error))
        })
           
    };
}
