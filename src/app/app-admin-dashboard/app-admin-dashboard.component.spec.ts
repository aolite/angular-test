import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminDashboardComponent } from './app-admin-dashboard.component';

describe('AppAdminDashboardComponent', () => {
  let component: AppAdminDashboardComponent;
  let fixture: ComponentFixture<AppAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
