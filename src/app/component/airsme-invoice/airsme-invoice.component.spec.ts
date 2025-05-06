import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirsmeInvoiceComponent } from './airsme-invoice.component';

describe('AirsmeInvoiceComponent', () => {
  let component: AirsmeInvoiceComponent;
  let fixture: ComponentFixture<AirsmeInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirsmeInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirsmeInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
