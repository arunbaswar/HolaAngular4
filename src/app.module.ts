import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { MatFormFieldModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home.component';
import { AddEmployeeComponent } from './home/components/addemployee.component';
import { EditEmployeeComponent } from './home/components/editemployee.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/employees', pathMatch: 'full' },
    { path: 'employees', component: HomeComponent },
    { path: 'addemployee', component: AddEmployeeComponent },
    { path: 'editemployee/:id', component: EditEmployeeComponent }
];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        Angular2FontawesomeModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HomeModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true
            }
        )
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }