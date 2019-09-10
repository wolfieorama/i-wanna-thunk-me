import React, { Component } from 'react';
import { itemsFetchData, itemsSendData } from '../../store/actions/employeeActions';
import { connect } from 'react-redux';

export class Employee extends Component {

    componentDidMount = () => {
        this.props.fetchData("http://dummy.restapiexample.com/api/v1/employees");
    }

    addEmployee = () => {
        this.props.addDAta("http://dummy.restapiexample.com/api/v1/create",
         {"name":"nugu","salary":"123","age":"23"});
         console.log("data sent", 1)
    }

    
    render() {
        return (
            <div>
                <button onClick={this.addEmployee}>Add employee</button>
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
        error: state.error
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        addDAta: (url, data) => dispatch(itemsSendData(url, data))
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Employee)
