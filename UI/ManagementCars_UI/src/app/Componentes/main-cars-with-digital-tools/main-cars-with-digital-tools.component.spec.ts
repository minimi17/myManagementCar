import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCarsWithDigitalToolsComponent } from './main-cars-with-digital-tools.component';

describe('MainCarsWithDigitalToolsComponent', () => {
  let component: MainCarsWithDigitalToolsComponent;
  let fixture: ComponentFixture<MainCarsWithDigitalToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCarsWithDigitalToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCarsWithDigitalToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
