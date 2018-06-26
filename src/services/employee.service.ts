import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../classes/employee';

const list: Array<Employee> = [{ "id": 1, "first_name": "Salli", "last_name": "Harvard", "email": "sharvard0@ezinearticles.com", "gender": "Female", "designation": "Payment Adjustment Coordinator", "Skill": "Ayurveda", "SSN": "645-94-1782" },
{ "id": 2, "first_name": "Roddy", "last_name": "Pye", "email": "rpye1@webs.com", "gender": "Male", "designation": "Geological Engineer", "Skill": "Finance", "SSN": "679-19-3357" },
{ "id": 3, "first_name": "Hakim", "last_name": "Scantlebury", "email": "hscantlebury2@cyberchimps.com", "gender": "Male", "designation": "Assistant Manager", "Skill": "Fashion Shows", "SSN": "455-95-2167" },
{ "id": 4, "first_name": "Caryl", "last_name": "Ingram", "email": "cingram3@squarespace.com", "gender": "Male", "designation": "Safety Technician IV", "Skill": "Embedded Systems", "SSN": "650-53-7490" }];


@Injectable()
export class EmployeeService {
    employeeServiceUrl = 'assets/employees.json';
    employees: Array<Employee>;

    constructor(private http: HttpClient) {

    }


    getEmployees() {
      //  return this.http.get<Array<Employee>>(this.employeeServiceUrl);
        return this.employees = list;
    }
    saveEmployee(payload: Employee) {
        payload.id = this.employees[this.employees.length - 1].id + 1;
        this.employees.push(payload);

    }
    deleteEmployeeById(id: number){
        let item = this.employees.filter((emp: Employee) => emp.id=== id);
        let indexOfItem = this.employees.findIndex((val:Employee) => val.id === item[0].id);
        this.employees.splice(indexOfItem, 1);
    }

    updateEmployee(payload: Employee){
        let item = this.employees.filter((emp: Employee) => emp.id === payload.id);
        item[0].first_name = payload.first_name;
        item[0].last_name = payload.last_name;
        item[0].email= payload.email;
        item[0].gender = payload.gender;
        item[0].designation = payload.designation;
        item[0].Skill = payload.Skill;
        item[0].SSN = payload.SSN;
        
    }

    getEmployeeById(id: number){
        var filteredItem = this.employees.filter((emp: Employee)=> emp.id === id)[0];
        return filteredItem;
    }


}