import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePracticesComponent } from './table-practices.component';

describe('TablePracticesComponent', () => {
  let component: TablePracticesComponent;
  let fixture: ComponentFixture<TablePracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePracticesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
