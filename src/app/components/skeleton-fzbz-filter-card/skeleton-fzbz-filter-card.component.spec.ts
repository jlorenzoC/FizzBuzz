import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonFzbzFilterCardComponent } from './skeleton-fzbz-filter-card.component';

describe('SkeletonFzbzFilterCardComponent', () => {
  let component: SkeletonFzbzFilterCardComponent;
  let fixture: ComponentFixture<SkeletonFzbzFilterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonFzbzFilterCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonFzbzFilterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
