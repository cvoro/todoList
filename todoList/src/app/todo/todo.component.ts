import { Component, ChangeDetectorRef ,OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
// import { Router, ActivatedRoute } from '@angular/router';
import {List} from '../models/list';
import { Router, ActivatedRoute } from '@angular/router';
import {AlertService} from '../services/alert.service';

import 'rxjs/Rx'; 

import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

import {AuthenticationService} from '../services/authentication.service';


@Component({
  selector: 'todo',
  templateUrl: './todo.html',
  styleUrls: ['../app.component.css'],
  providers:[UserService,AuthenticationService],
})

export class TodoComponent implements OnInit{
  title = 'this is todo list';
  list: List[] = [];
  data: {};
  user={};
  user1={};
  lis={};
  dataa={
    index: null
  };
  loading = false;
  visible: true;
returnUrl: string;
error = "";
showEdit = false;
//   settings = {
//   columns: {
//     date:{
//       title: 'date'
//     },
//     id: {
//       title: 'ID'
//     },
//     korisnikId:{
//       title: 'Korisnik ID'
//     },
//     status: {
//       title: 'status'
//     },
//     text: {
//       title: 'Full Name'
//     },
//     title: {
//       title: 'User Name'
//     }
//   }
// };
// ddata = this.list;
// dataa = [
//   {
//     date: 2016-12-20,
//     id: 1,
//     korisnikId: 1,
//     status: true,
//     text: "Bret",
//     title: "Sincere@april.biz"
//   },
//   {
//     date: 2016-12-20,
//     id: 1,
//     korisnikId: 1,
//     status: true,
//     text: "Brdsfsdfsadet",
//     title: "Sincere@april.biz"
//   },
  
//   // ... list of items
  
//   {
//     date: 2016-12-20,
//     id: 1,
//     korisnikId: 1,
//     status: true,
//     text: "Bresdfasdfasdfasfasfasfasfasfat",
//     title: "Sincere@april.biz"
//   },
// ];


constructor(private userServce: UserService, private hangeDetectorRef: ChangeDetectorRef,private slimLoadingBarService: SlimLoadingBarService){}

// ngOninit(){
//   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
// }

 ngOnInit(){
   this.startLoading()
   this.loading = true;
  return this.userServce.getAll().delay(1500).subscribe(
                list=>this.list = list,
                err => this.error = "Popuni polja pravinlno",
                () => {this.completeLoading()
                  this.loading = false}
        );
  }
   getList(){
     this.startLoading()
    return this.userServce.getAll().subscribe(
                list=>this.list = list,
                err => this.error = "Popuni polja pravinlno",
                () => this.completeLoading()
        );
  }
  // deleteList(i){
  //   console.log(i)
  //    this.list.splice(i,1);
  // }
  deleteUser(i,id){
     this.startLoading()
    return this.userServce.deleteUser(id).subscribe(
                data => {this.list.splice(i,1)
                this.error = "";
              console.log(i)},
                err => console.log(err.status),
                () => this.completeLoading()
                );
  }

  update(user){
    this.error="";
     this.startLoading()
    return this.userServce.update(user).subscribe(
                data => {console.log("updated")
              this.error = "";
              console.log(user.index)
          this.list[user.index]= data
          },
                err => this.error = "Enter proper date",
                () => this.completeLoading()
                );

                
  }
  edit(user, i){
    this.showEdit = true; 
    this.dataa = user;
    this.dataa.index = i;
    return this.dataa;
               
  }
 

  addUser(user1){
    // user1.date = Date.now();
    // console.log(user1.date)
     this.startLoading()
       return this.userServce.addUser(user1).subscribe(
                data =>{ this.getList()
                this.error = ""},
                  err => this.error = "Enter proper date",
                () => this.completeLoading()
                );
  }
startLoading() {
        this.slimLoadingBarService.start(() => {
            console.log('Loading complete');
        });
    }

    stopLoading() {
        this.slimLoadingBarService.stop();
    }

    completeLoading() {
        this.slimLoadingBarService.complete();
    }
  // change(lis){
  //   console.log(lis)
  // var a = document.getElementById('date')
  // a.value = lis.date;
  //   document.getElementById('id').nodeValue = lis.id;
  //   document.getElementById('korisnikId').nodeValue = lis.korisnikId;
  //   document.getElementById('status').nodeValue = lis.status;
  //   document.getElementById('text').nodeValue = lis.text;
  //   document.getElementById('title').nodeValue = lis.title;
  // }
  // deleteList(i){
  //     this.list.splice(i,1);
  // }
  // show(){
  //   console.log("poziva")
  //   this.visible = !this.visible
  //   return this.visible;
  // }
  
       /// console.log(this.list)

}