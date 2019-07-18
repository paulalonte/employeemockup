import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employeelist/employee';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.scss']
})
export class EmployeedetailComponent implements OnInit {

	@Input() employee: Employee;
	totalHearts:number = 5;
	hearts: Array<number>;
	index:number;

	constructor() { }

	ngOnInit() {
		this.hearts = [];
		this.setArrayHearts();
		//set default value for heart
		this.index = 2;
	}

	setArrayHearts():void {
		for(var i = 0; i < this.totalHearts; i++) {
			this.hearts.push(i);
		}
	}

	heartClick(val:number):void {
		this.index = val;
	}

}
