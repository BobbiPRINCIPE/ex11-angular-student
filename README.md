# Ex11AngularStudent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

## Setup from scratch - ilker added
+ make sure angular CLI is installed globally, if not install it
```
ng -v
npm install -g @angular/cli
```
+ create the app shell via CLI, takes a minute or so
```
cd /c/fdu/csci3444/projects
ng new ex11-angular-student
```
+ can immediately start running it (CLI uses Webpack as build tool)
```
cd ex11-angular-student
ng serve
```
+ can immediately access above started app (by default it uses port 4200) with browser
```
http://locahost:42000
```
+ to stop webpack started above, in Terminal enter, Ctrl + C


## setup from clone
+ clone this project, install dependencies, start app in a separate gitbash
```
cd /c/fdu/csci3444/projects
git clone https://github.com/fdu-csci3444/ex11-angular-student
cd ex11-angular-student
npm install
npm run start
```

### start creating the app - ilker
+ create student component in components via CLI. Notice 
    - it (StudentComponent) gets auto added to "delarations" of app.module.ts
    - generated StudentComponent (components/student.component.ts) "implements OnInit", hence has ngOnInit() method, which is a "life cycle" hook that will run when component is initialized
```
mkdir -p /c/fdu/csci3444/projects/ex11-angular-student/src/app/components
ng generate component components/student
ng g c components/student
```
+ use above created user comp in main app. Note student.component.ts has selector: 'app-student', so add below to app.component.html
```
<app-student></app-student>
```
+ create a service, then add(import) it as provider in app.module.ts, also import and inject the service to student.component.ts via its constructor
``` 
mkdir -p /c/fdu/csci3444/projects/ex11-angular-student/src/app/services
ng generate service services/studentData
ng g s services/studentData
```
+ let above service make REST call, add(import) HttpModule to imports of 
+ create about component, which will be referred by routes
```
ng g c components/about
```
+ create routes in app.module.ts  and route links in app.component.html

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
