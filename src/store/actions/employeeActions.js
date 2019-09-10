import axios from 'axios';

export const loadEmployeesSuccess = (employees) => ({
    type: "LOAD_EMPLOYEES_SUCCESS",
    employees,
});

export const loadEmployeesError = (bool) => ({
    type: "LOAD_EMPLOYEES_ERROR",
    error: bool
});

export function itemsFetchData(url) {
    return (dispatch) => {
        axios.get(url)
            .then((res) => dispatch(loadEmployeesSuccess(res.data)))
            .catch(() => dispatch(loadEmployeesError(true)));
    };
}
