import { NgForm } from '@angular/forms';
import { digitalTools } from './../../Models/Entity/DigitalTools';
import { ActivatedRoute } from '@angular/router';
import { DigitalToolsService } from './../../services/digital-tools.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-digital-tools',
  templateUrl: './update-digital-tools.component.html',
  styleUrls: ['./update-digital-tools.component.scss'],
})
export class UpdateDigitalToolsComponent implements OnInit {
  constructor(
    private digitalToolsService: DigitalToolsService,
    private myRoute: ActivatedRoute
  ) {}

  addDigitalTools!: digitalTools;
  id!: number;

  ngOnInit(): void {
    this.myRoute.paramMap.subscribe((myPar) => {
      this.id = +myPar.get('id')!;
    });

    this.digitalToolsService.GetDigitalTools2(this.id).subscribe(
      (data) => {
        this.addDigitalTools = data;
      },
      (err) => {
        alert(err.error);
      }
    );
  }

  update(form: NgForm) {
    this.digitalToolsService.PutDigitalTools(this.id, this.addDigitalTools).subscribe(
      (data) => {
        alert('Update successful !');
        const confirmAction = confirm('Would you like to reset the form?');
        if (confirmAction) {
          form.reset();
        }
      },
      (err) => {
        alert(err.error);
      }
    );
  }
}
