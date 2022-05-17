import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarWithDigitalToolsComponent } from './update-car-with-digital-tools.component';

describe('UpdateCarWithDigitalToolsComponent', () => {
  let component: UpdateCarWithDigitalToolsComponent;
  let fixture: ComponentFixture<UpdateCarWithDigitalToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCarWithDigitalToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCarWithDigitalToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
