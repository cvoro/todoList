import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {TodoGuard} from './guards/todo.guard';

//import {Login} from './services/login.service'

const routes: Routes=[
    
    // {
    //     path:'',
    //    redirectTo: '/login',
    // //    pathMatch: 'full',
    // //   //canActivate: [TodoGuard]
    // },
    {
        path: 'login', component: LoginComponent, canActivate: [TodoGuard]
    },
     {
        path: 'todo', component: TodoComponent, canActivate: [AuthGuard]
    },
     {
        path: 'app', component: AppComponent
    }
];
@NgModule({
    imports:[RouterModule.forRoot(routes),RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}