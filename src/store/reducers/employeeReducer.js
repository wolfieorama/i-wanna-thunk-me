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