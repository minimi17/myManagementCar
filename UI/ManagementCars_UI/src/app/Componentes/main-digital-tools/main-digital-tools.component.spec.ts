import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDigitalToolsComponent } from './main-digital-tools.component';

describe('MainDigitalToolsComponent', () => {
  let component: MainDigitalToolsComponent;
  let fixture: ComponentFixture<MainDigitalToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDigitalToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDigitalToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
