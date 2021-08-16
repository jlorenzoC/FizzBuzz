import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBadgeComponent } from './image-badge.component';

describe('ImageBadgeComponent', () => {
  let component: ImageBadgeComponent;
  let fixture: ComponentFixture<ImageBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
