import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMastryComponent } from './angular-mastry.component';

describe('AngularMastryComponent', () => {
  let component: AngularMastryComponent;
  let fixture: ComponentFixture<AngularMastryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularMastryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMastryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
