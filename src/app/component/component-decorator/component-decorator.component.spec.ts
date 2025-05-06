import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDecoratorComponent } from './component-decorator.component';

describe('ComponentDecoratorComponent', () => {
  let component: ComponentDecoratorComponent;
  let fixture: ComponentFixture<ComponentDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDecoratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
