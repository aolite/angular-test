import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminTopicsDetailComponent } from './app-admin-topics-detail.component';

describe('AppAdminTopicsDetailComponent', () => {
  let component: AppAdminTopicsDetailComponent;
  let fixture: ComponentFixture<AppAdminTopicsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminTopicsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminTopicsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
