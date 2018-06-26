import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../classes/employee';
import { EmployeeService } from '../../services/employee.service';


@Component({
    selector: 'employee-list',
    templateUrl: '../html/employeelist.component.html',
    styleUrls: ['../css/employeelist.component.css']
})

export class EmployeeListComponent {

    @Input() empData: Array<Employee>;

    constructor(private empService: EmployeeService, private router: Router) {

    }

    deleteEmployee(emp: Employee) {
        this.empService.deleteEmployeeById(emp.id);
    }

    editEmployee(emp: Employee) {
        this.router.navigate(['/editemployee', emp.id ]);
       
    }
}