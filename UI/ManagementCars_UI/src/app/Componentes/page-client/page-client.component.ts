import { UserService } from './../../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit {

  constructor(private myRoute:ActivatedRoute,
              private router:Router,
              private userService:UserService) { }

  id:string = "";

  ngOnInit(): void {
    this.myRoute.paramMap.subscribe( (myParamters) =>
    {
      this.id = myParamters.get('id')!;
    })
  }

  by():void{
    const answer = confirm('Sure ? ');
    if(answer == true)
    {
      this.userService.setKindUser('');
      this.router.navigate([''])
    }
  }




}
