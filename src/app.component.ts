import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { EmployeeService } from './services/employee.service';
import { Employee } from './classes/employee';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: []

})

export class AppComponent implements OnInit {
  employeeList: Employee[];
  searchControl: FormControl;
  filteredOptions: Observable<Employee[]>;

  constructor(private empServices: EmployeeService) {
    this.employeeList = [];
    this.searchControl = new FormControl();
  }

  ngOnInit() {

    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith<string | Employee>(''),
      map(value => typeof value === 'string' ? value : value.email),
      map(email => email ? this.filterEmployeeList(email) : this.employeeList.slice())
    );

    this.loadEmployees();

  }

  filterEmployeeList(email: string): Employee[] {
    return this.employeeList.filter(obj => obj.email.toLowerCase().indexOf(email.toLowerCase()) === 0);
  }

  loadEmployees() {
    // return this.empServices.getEmployees().subscribe(data => { this.employeeList = data });
    return this.employeeList = this.empServices.getEmployees();
  }

  displayFn(employee?: Employee): string | undefined {
    return employee ? employee.email : undefined;
  }
}

