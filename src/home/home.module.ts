import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatRadioModule } from '@angular/material';


import { HomeComponent } from './components/home.component';
import { EmployeeListComponent } from './components/employeelist.component';
import { AddEmployeeComponent } from './components/addemployee.component';
import { EditEmployeeComponent } from './components/editemployee.component';
import { EmployeeService } from '../services/employee.service';

@NgModule({
    declarations: [
        HomeComponent,
        EmployeeListComponent,
        AddEmployeeComponent,
        EditEmployeeComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatRadioModule,

    ],
    providers: [
        EmployeeService
    ],
    exports: [
        HomeComponent,
        AddEmployeeComponent,
        EditEmployeeComponent
    ]
})

export class HomeModule { }

