import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPracticesComponent } from './form-practices.component';

describe('FormPracticesComponent', () => {
  let component: FormPracticesComponent;
  let fixture: ComponentFixture<FormPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPracticesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
