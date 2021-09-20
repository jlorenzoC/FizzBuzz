import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInsideSidebarComponent } from './dashboard-inside-sidebar.component';

describe('DashboardInsideSidebarComponent', () => {
  let component: DashboardInsideSidebarComponent;
  let fixture: ComponentFixture<DashboardInsideSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInsideSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInsideSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
