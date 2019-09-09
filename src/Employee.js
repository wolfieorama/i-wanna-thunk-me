import React, { Component } from 'react';
import axios from 'axios';

export class Employee extends Component {
    constructor(props){
        super(props)
        this.state = {
            employees: [],
            isloaded : false
        }
    }

    componentDidMount = () => {
        const url = "http://dummy.restapiexample.com/api/v1/employees";
        axios.get(url)
        .then(res =>{
            console.log(res.data)
            this.setState({
                employees: res.data,
                isloaded: true
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        const { employees } = this.state;

        return (
            <div>
               {employees.map(employee =>
                    <li key={employee.id}>
                        Name: {employee.employee_name}
                    </li>
                )}
            </div>
        )
    }
}

export default Employee
