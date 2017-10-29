import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminTopicsAddComponent } from './app-admin-topics-add.component';

describe('AppAdminTopicsAddComponent', () => {
  let component: AppAdminTopicsAddComponent;
  let fixture: ComponentFixture<AppAdminTopicsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminTopicsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminTopicsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
