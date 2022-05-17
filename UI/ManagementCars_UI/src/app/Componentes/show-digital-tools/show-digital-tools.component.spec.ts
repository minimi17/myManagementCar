import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDigitalToolsComponent } from './show-digital-tools.component';

describe('ShowDigitalToolsComponent', () => {
  let component: ShowDigitalToolsComponent;
  let fixture: ComponentFixture<ShowDigitalToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDigitalToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDigitalToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
