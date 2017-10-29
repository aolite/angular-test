import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminUserDetailComponent } from './app-admin-user-detail.component';

describe('AppAdminUserDetailComponent', () => {
  let component: AppAdminUserDetailComponent;
  let fixture: ComponentFixture<AppAdminUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
