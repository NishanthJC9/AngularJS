import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from './bookservice.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'angularapp';
  firstName = 'Nishanth';
  lastName = "J C";
  age = 10;
  company = "Infosys";
  value = "Allen";
  image = "../assets/download.jpeg";
  twoWay = " ";
  isDisable = false;
  //isDisable = true;

  save(ev : any){
    console.log("I Clicked on save", ev)
  }

  add = () =>{
    console.log("add")
  }
  // String interpolation - {{}}
  // 2-way binding - [(ngmodel)]
  //property binding - []
  // event binding - ()

  course = ['html','css','javascript',"angular"]

  arobj = [
    {
      name:"Nishanth",
      age : 22
    },
    {
      name:"Charan",
      age : 25
    }
  ]

  varCase = "ten"
  // types of directives
  // Component Directives
  // Structural Directives - *ngFor, *ngSwitch, *ngIf
  // Attribute Directives - ngClass, ngStyle

  show = true
  elseblock = true
  thenblock = false

  color = true

  success = "text-danger"

  itHasError = true;

  msg = {
    "text-success":this.itHasError,
    "text-danger":!this.itHasError,
    "text-special":this.itHasError,
  }

  userName = "Allen"

  dataFromChild=""

  handleData(data : any){ //the data is a variable
    this.dataFromChild = data
  }

  constructor(private router: Router, private bookservice : BookserviceService, private userService : UserService){

  }

  post : any = []

  getpost(){
    this.userService.getPostDetails().subscribe(data => {
      this.post = data
    })
  }

  response : any = []

  ngOnInit() {
      this.bookservice.getBookDetails()
      .subscribe(data => {
        this.response = data
        console.log(data)
      })
  }

  goToHeader(){
    this.router.navigate(['header'])
  }
  goToFooter(){
    this.router.navigate(['footer'])
  }

  goToUser(){
    this.router.navigate(['user','100','NishanthJC'])
  }
}