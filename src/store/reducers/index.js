import { combineReducers } from 'redux';
import { items, itemsHasErrored } from './itemReducer';
import {employees, employeeHasErrored, addEmployees } from './employeeReducer';

export default combineReducers({
    items,
    itemsHasErrored,
    employees,
    addEmployees,
    employeeHasErrored
});