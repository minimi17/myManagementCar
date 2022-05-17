import { UserService } from './../../user.service';
import { Router } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { userLogIn } from 'src/app/Models/DTO/userLogIn';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  constructor(private clientService:ClientService,
              private router:Router,
              private userService:UserService) { }

  user:userLogIn={
    id:'',
    remember:true
  }
  ngOnInit(): void {
    if(localStorage.getItem('id') == null)
    {}
    else{
      this.user.id = localStorage.getItem('id')!;
    }
  }



  logIn(){

    if(this.user.remember)
    {
      localStorage.setItem('id',this.user.id)
    }
    else{
      localStorage.removeItem('id')
    }

    this.clientService.GetClient(this.user.id)
    .subscribe(
      data=>
      {
        this.userService.setKindUser('Client');
        this.router.navigate(['Client',this.user.id])
      },
      (err)=>{
        alert(err.error);
      }
    )

  }

}
