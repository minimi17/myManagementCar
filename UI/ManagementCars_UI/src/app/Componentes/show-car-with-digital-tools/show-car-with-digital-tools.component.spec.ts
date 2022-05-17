import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCarWithDigitalToolsComponent } from './show-car-with-digital-tools.component';

describe('ShowCarWithDigitalToolsComponent', () => {
  let component: ShowCarWithDigitalToolsComponent;
  let fixture: ComponentFixture<ShowCarWithDigitalToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCarWithDigitalToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCarWithDigitalToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
