import { Component, OnInit } from '@angular/core';
import { Employee } from '../../classes/employee';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';


@Component({
    selector: 'edit-employee',
    templateUrl: '../html/editemployee.component.html',
    styleUrls: ['../css/editemployee.component.css']
})

export class EditEmployeeComponent implements OnInit {
    employee: Employee;

    email: FormControl;
    firstName: FormControl;
    lastName: FormControl;
    gender: FormControl;
    designation: FormControl;
    skill: FormControl;
    ssn: FormControl;

    constructor(private router: Router, private empService: EmployeeService, private activeRoute: ActivatedRoute) {

        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.firstName = new FormControl('', [Validators.required]);
        this.lastName = new FormControl('');
        this.gender = new FormControl('');
        this.designation = new FormControl('');
        this.skill = new FormControl('');
        this.ssn = new FormControl('');



    }
    ngOnInit() {
        let id = this.activeRoute.snapshot.params['id'];
        this.employee = this.empService.getEmployeeById(+id);
    }

    backToHome() {
        this.router.navigateByUrl('/employees');
    }

    updateEmployee() {
        this.empService.updateEmployee(this.employee);
        this.router.navigateByUrl('/employees');
    }

}