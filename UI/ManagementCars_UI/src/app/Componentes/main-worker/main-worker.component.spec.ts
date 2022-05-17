import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWorkerComponent } from './main-worker.component';

describe('MainWorkerComponent', () => {
  let component: MainWorkerComponent;
  let fixture: ComponentFixture<MainWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
