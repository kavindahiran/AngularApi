# StudentCourseReg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## angular documentation

## create new angular app
ng new PaymentApp  -s -S -g
ng new MyApp --routing=false
ng new MyApp -s -S -g --no-standalone --routing=false --ssr=false

## run angular project 
ng serve -o

 ## stop the server
ctrl c

## how to create a compoenent
ng g c payment-details

## how to create a component inside  payment-details component folder
ng g c payment-details/payment-detail-form

## in any situation if u dont find the app.module.ts file when u create the project create it manually. it should be inside the app folder

## how to create the model class file?
ng g cl shared/payment-detail --type=model

## how to create the service class file?
ng g s shared/payment-detail

## how to create the environment configuration files?
ng generate environments  

## clear the data in the app.component.html

 ## register the added components inside the app.module.ts file

## inside the index.html add the bootrap and other libraries

## inside the app.component.ts include the parent component inside a container

## inside the parent component design ure web page for registration and list

## import { HttpClientModule } from '@angular/common/http' in app.module.ts, student.service.ts


## .net nuget packages
Microsoft.AspNetCore.Mvc.Core
Microsoft.EntityFrameworkCore
Microsoft.EntityFrameworkCore.SqlServer
Microsoft.EntityFrameworkCore.Tools

## connection string   "ConnectionStrings": {
    "DefaultConnection": "Server=LAPTOP-JAOO1ABM\\SQLEXPRESS;Initial Catalog=EmployeeDb;Trusted_Connection=True;Encrypt=false;TrustServerCertificate=True"
  }

## register cors
app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});