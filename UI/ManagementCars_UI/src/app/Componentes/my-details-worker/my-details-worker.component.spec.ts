import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDetailsWorkerComponent } from './my-details-worker.component';

describe('MyDetailsWorkerComponent', () => {
  let component: MyDetailsWorkerComponent;
  let fixture: ComponentFixture<MyDetailsWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDetailsWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDetailsWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
