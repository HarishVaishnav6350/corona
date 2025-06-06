import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationDemoComponent } from './animation-demo.component';

describe('AnimationDemoComponent', () => {
  let component: AnimationDemoComponent;
  let fixture: ComponentFixture<AnimationDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
