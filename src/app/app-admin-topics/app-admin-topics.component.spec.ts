import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminTopicsComponent } from './app-admin-topics.component';

describe('AppAdminTopicsComponent', () => {
  let component: AppAdminTopicsComponent;
  let fixture: ComponentFixture<AppAdminTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
