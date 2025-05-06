import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseableCardComponent } from './reuseable-card.component';

describe('ReuseableCardComponent', () => {
  let component: ReuseableCardComponent;
  let fixture: ComponentFixture<ReuseableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseableCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
