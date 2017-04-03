import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import {Ng2PaginationModule} from 'ng2-pagination';

//import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppRoutingModule }     from './todo.routing';

import { AppComponent } from './app.component';
import {TodoComponent} from './todo/todo.component'
import {LoginComponent} from './login/login.component';;
import {AuthGuard} from './guards/auth.guard';
import {TodoGuard} from './guards/todo.guard';
import { CustomFormsModule } from 'ng2-validation'

 //import {SmartTables} from './smartTables/smartTables.component';

//import {BusyModule} from 'angular2-busy';
import {Ng2PaginationModule} from 'ng2-pagination';
import { CommonModule }  from '@angular/common';
 
 import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';


@NgModule({
  declarations: [
    AppComponent,TodoComponent,LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CustomFormsModule,
      SlimLoadingBarModule.forRoot(),
      Ng2PaginationModule
  ],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
   exports: [BrowserModule, SlimLoadingBarModule],
  providers: [AuthGuard, TodoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
