import { LoginWorkerComponent } from './../login-worker/login-worker.component';
import { UserService } from './../../user.service';
import { Component, Injectable, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Injectable()
export class HomeComponent implements OnInit {

  constructor(private userService:UserService,
             private router:Router) { }

  ngOnInit(): void {
  }

  loginworker()
  {
    this.router.navigate(['Login/Worker'])
  }

  loginclient()
  {
    this.router.navigate(['Login/Client'])
  }

  displayImg:boolean = false;
  changeDisplay(change:boolean)
  {
    this.displayImg = change;
  }

  // funs()
  // {
  //   alert('kkk');
  // }
  // fun1()
  // {
  //   alert('hi');
  //   this.userService.setKindUser('Client')
  // }

  // fun2()
  // {
  //   alert('hi');
  //   this.userService.setKindUser('General')
  // }

  // fun3()
  // {
  //   alert('hi');
  //   this.userService.setKindUser('Manager')
  // }

  // cars:{value:string,text:string,img:string}[] = [
  //   {value:'Alfa Romeo C4',text:'Alfa Romeo C4',img:'../assets/Images/Cars/Alfa Romeo C4.jpg'},
  //   {value:'Audi A-series',text:'Audi A-series',img:'../assets/Images/Cars/Audi A-series.jpg'},
  //   {value:'BMW Sedan',text:'BMW Sedan',img:'../assets/Images/Cars/BMW Sedan.jpg'},
  //   {value:'Ford Taurus',text:'Ford Taurus',img:'../assets/Images/Cars/Ford Taurus.jpg'},
  //   {value:'Mercedes Benz',text:'Mercedes Benz',img:'../assets/Images/Cars/Mercedez Benz.jpg'},
  //   {value:'Tesla Model X',text:'Tesla Model X',img:'../assets/Images/Cars/Tesla Model X.jpg'},

  // ]

  // chooseCar:string = '';

}
