import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOperationsComponent } from './grid-operations.component';

describe('GridOperationsComponent', () => {
  let component: GridOperationsComponent;
  let fixture: ComponentFixture<GridOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
