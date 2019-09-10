import { combineReducers } from 'redux';
import { items, itemsHasErrored } from './itemReducer';
import {employees, employeeHasErrored } from './employeeReducer';

export default combineReducers({
    items,
    itemsHasErrored,
    employees,
    employeeHasErrored
});