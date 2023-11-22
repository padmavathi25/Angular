import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLoginFormComponent } from './dynamic-login-form.component';

describe('DynamicLoginFormComponent', () => {
  let component: DynamicLoginFormComponent;
  let fixture: ComponentFixture<DynamicLoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicLoginFormComponent]
    });
    fixture = TestBed.createComponent(DynamicLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
