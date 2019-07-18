import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from './employee-mockup';
import { Employee } from './employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})

export class EmployeelistComponent implements OnInit {

  employees: any;
  selectedEmployee: Employee;

  constructor() { }

  ngOnInit() {
  	this.getEmployees();
  }

  getEmployees():void {
  	this.employees = EMPLOYEES;

  	//select default first employee
  	if(this.employees.length) {
  		this.selectedEmployee = this.employees[0];	
  	}
  	
  }
  
  onClickEmployee(employee:Employee):void {
  	this.selectedEmployee = employee;
  }

}
