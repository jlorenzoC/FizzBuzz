import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchByNumberComponent } from './input-search-by-number.component';

describe('InputSearchByNumberComponent', () => {
  let component: InputSearchByNumberComponent;
  let fixture: ComponentFixture<InputSearchByNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSearchByNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSearchByNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
