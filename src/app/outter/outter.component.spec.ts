import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutterComponent } from './outter.component';

describe('OutterComponent', () => {
  let component: OutterComponent;
  let fixture: ComponentFixture<OutterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
