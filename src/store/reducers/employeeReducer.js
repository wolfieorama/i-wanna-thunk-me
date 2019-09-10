export function employeeHasErrored(state = false, action) {
    switch (action.type) {
        case 'LOAD_EMPLOYEES_ERROR':
            return action.error;
        default:
            return state;
    }
}

export function employees(state = [], action) {
    switch (action.type) {
        case 'LOAD_EMPLOYEES_SUCCESS':
            return action.employees;
        default:
            return state;
    }
}

export function addEmployees(state = [], action) {

    // const newState = {...state}

    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return  [state, action.data];
        default:
            return state;
    }
}