import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedInfoComponent } from './grouped-info.component';

describe('FilteredInfoComponent', () => {
  let component: GroupedInfoComponent;
  let fixture: ComponentFixture<GroupedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupedInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
