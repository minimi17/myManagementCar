import { UserService } from './../../user.service';
import { Router } from '@angular/router';
import { WorkerService } from './../../services/worker.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { workerLogIn } from 'src/app/Models/DTO/workerLogIn';
import { AddWorkerComponent } from '../add-worker/add-worker.component';

@Component({
  selector: 'app-login-worker',
  templateUrl: './login-worker.component.html',
  styleUrls: ['./login-worker.component.scss']
})
export class LoginWorkerComponent implements OnInit {

  constructor(private workerService:WorkerService,
    private router:Router,
    private userService:UserService) { }

  workerlogin!:workerLogIn;
  ngOnInit(): void {

    this.workerlogin={
      password:'',
      rePassword:'',
      id:'',
      remember:true,
      loves:[],
      born:new Date()
    }

    if(localStorage.getItem('idWorker') == null)
    {}
    else{
      this.workerlogin.id = localStorage.getItem('idWorker')!;
    }

    if(localStorage.getItem('passwordWorker') == null)
    {}
    else{
      this.workerlogin.password = localStorage.getItem('passwordWorker')!;
      this.workerlogin.rePassword = localStorage.getItem('passwordWorker')!;
    }
  }

  loginworker():void{

    if(this.workerlogin.remember)
    {
      localStorage.setItem('idWorker',this.workerlogin.id)
    }
    else{
      localStorage.removeItem('idWorker')
    }

    if(this.workerlogin.remember)
    {
      localStorage.setItem('passwordWorker',this.workerlogin.password)
    }
    else{
      localStorage.removeItem('passwordWorker')
    }

    this.workerService.checkWorker(this.workerlogin)
    .subscribe(
      data=>
      {
        if(data.role == "Management")
        this.userService.setKindUser('Manager');
        else
        this.userService.setKindUser('General');
        this.router.navigate(['Worker',this.workerlogin.id])
      },
      (err)=>{
        alert(err.error);
      }
    )

     }

}
