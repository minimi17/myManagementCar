import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDigitalToolsComponent } from './add-digital-tools.component';

describe('AddDigitalToolsComponent', () => {
  let component: AddDigitalToolsComponent;
  let fixture: ComponentFixture<AddDigitalToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDigitalToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDigitalToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
