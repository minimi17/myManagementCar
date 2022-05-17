import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarWithDigitalToolsComponent } from './add-car-with-digital-tools.component';

describe('AddCarWithDigitalToolsComponent', () => {
  let component: AddCarWithDigitalToolsComponent;
  let fixture: ComponentFixture<AddCarWithDigitalToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarWithDigitalToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarWithDigitalToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
