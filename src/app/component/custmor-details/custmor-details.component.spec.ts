import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmorDetailsComponent } from './custmor-details.component';

describe('CustmorDetailsComponent', () => {
  let component: CustmorDetailsComponent;
  let fixture: ComponentFixture<CustmorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustmorDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustmorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
