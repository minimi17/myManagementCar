import { UserService } from './../../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-worker',
  templateUrl: './page-worker.component.html',
  styleUrls: ['./page-worker.component.scss']
})
export class PageWorkerComponent implements OnInit {

  constructor(private myRoute:ActivatedRoute,
    private router:Router,
    private userService:UserService) { }

  // nameWorker:string="MDLove"
  kindWorker!:string;



  id:string = "";

  ngOnInit(): void {

    this.kindWorker = this.userService.getKindUser();
    this.myRoute.paramMap.subscribe( (myPar) =>
    {
      this.id = myPar.get('idWorker')!;
    })
  }

  by():void{
    const answer = confirm('Sure ? ');
    if(answer == true)
    {
      this.router.navigate([''])
    }
  }

}
