import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminUsersComponent } from './app-admin-users.component';

describe('AppAdminUsersComponent', () => {
  let component: AppAdminUsersComponent;
  let fixture: ComponentFixture<AppAdminUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
