import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAddressComponent } from './grid-address.component';

describe('GridAddressComponent', () => {
  let component: GridAddressComponent;
  let fixture: ComponentFixture<GridAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
