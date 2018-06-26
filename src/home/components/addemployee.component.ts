import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../classes/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
    selector: 'add-employee',
    templateUrl: '../html/addemployee.component.html',
    styleUrls: ['../css/addemployee.component.css']
})

export class AddEmployeeComponent {
    email: FormControl;
    firstName: FormControl;
    lastName: FormControl;
    gender: FormControl;
    designation: FormControl;
    skill: FormControl;
    ssn: FormControl;


    addEmpModel: Employee = new Employee();

    constructor(private employeeService: EmployeeService, private router: Router) {
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.firstName = new FormControl('', [Validators.required]);
        this.lastName = new FormControl('');
        this.gender = new FormControl();
        this.designation = new FormControl();
        this.skill = new FormControl();
        this.ssn = new FormControl();
    }

    getErrorMessage() {
        let isFormRequiredValid = this.email.hasError('required') || this.firstName.hasError('required');
        return isFormRequiredValid ? "You must enter a value" : !isFormRequiredValid && this.email.hasError('email') ? "Not a valid email" : "";
    }

    saveEmployee() {
        let reqPayload = this.addEmpModel;
        this.employeeService.saveEmployee(reqPayload);
        this.backToHome();

    }
    backToHome() {
        this.router.navigateByUrl('/employees');
    }

}