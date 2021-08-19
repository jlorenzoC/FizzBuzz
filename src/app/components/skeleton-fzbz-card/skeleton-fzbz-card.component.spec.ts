import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonFzbzCardComponent } from './skeleton-fzbz-card.component';
describe('SkeletonFzbzCardComponent', () => {
  let component: SkeletonFzbzCardComponent;
  let fixture: ComponentFixture<SkeletonFzbzCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonFzbzCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonFzbzCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
