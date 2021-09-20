import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FzbzStatisticAreaComponent } from './fzbz-statistic-area.component';

describe('FzbzStatisticAreaComponent', () => {
  let component: FzbzStatisticAreaComponent;
  let fixture: ComponentFixture<FzbzStatisticAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FzbzStatisticAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FzbzStatisticAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
