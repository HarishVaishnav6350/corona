import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrowerModuleComponent } from './drower-module.component';

describe('DrowerModuleComponent', () => {
  let component: DrowerModuleComponent;
  let fixture: ComponentFixture<DrowerModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrowerModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrowerModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
