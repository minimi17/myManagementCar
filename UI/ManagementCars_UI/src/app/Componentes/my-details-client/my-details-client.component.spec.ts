import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDetailsClientComponent } from './my-details-client.component';

describe('MyDetailsClientComponent', () => {
  let component: MyDetailsClientComponent;
  let fixture: ComponentFixture<MyDetailsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDetailsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDetailsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
