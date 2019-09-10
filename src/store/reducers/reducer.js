const initialState = {
    employees: [],
    isloaded : false,
    error: []
};

const reducer = (state = initialState, action) =>{

    const newState = {...state }

    if(action.type === 'LOAD_EMPLOYEES_START'){
        newState.isloaded = action.loadEmployeesStart
    }

    if(action.type === 'LOAD_EMPLOYEES_SUCCESS'){
        newState.employees = action.loadEmployeesSuccess
    }

    if(action.type === 'LOAD_EMPLOYEES_ERROR'){
        newState.error = action.loadEmployeesError
    }

    return newState;
}

export default reducer;