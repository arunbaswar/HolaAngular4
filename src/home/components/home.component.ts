import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../classes/employee';


@Component({
    selector: 'home',
    templateUrl: '../html/home.component.html',
    styleUrls: ['../css/home.component.css']
})

export class HomeComponent implements OnInit{
    employees: Array<Employee> = [];
    error: string;

    constructor(private employeeServices: EmployeeService, private route: Router) {

    }

    ngOnInit() {
        this.loadEmployees();
    }

    loadEmployees() {
        // this.employeeServices.getEmployees().subscribe((data) => {
        //     this.employees = data;
        // },
        //     error => this.error = error
        // );
     this.employees = this.employeeServices.getEmployees();
    }
    navigateToAddEmployee() {
        this.route.navigateByUrl('/addemployee');
    }

}