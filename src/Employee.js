import React, { Component } from 'react';
import * as actionCreator from './store/actions/actions';
import { connect } from 'react-redux';

export class Employee extends Component {

    componentDidMount = () => {
        this.props.fetchData("http://dummy.restapiexample.com/api/v1/employees");
    }
    
    render() {

        return (
            <div>
               {this.props.employees.map(employee =>
                    <li key={employee.id}>
                        Name: {employee.employee_name}
                    </li>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees,
        isloaded: state.isloaded,
        error: state.error
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchData: (url) => dispatch(actionCreator.itemsFetchData(url))
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Employee)
