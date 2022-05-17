import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDigitalToolsComponent } from './update-digital-tools.component';

describe('UpdateDigitalToolsComponent', () => {
  let component: UpdateDigitalToolsComponent;
  let fixture: ComponentFixture<UpdateDigitalToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDigitalToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDigitalToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
