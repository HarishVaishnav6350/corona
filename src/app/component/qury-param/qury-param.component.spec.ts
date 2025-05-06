import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuryParamComponent } from './qury-param.component';

describe('QuryParamComponent', () => {
  let component: QuryParamComponent;
  let fixture: ComponentFixture<QuryParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuryParamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuryParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
