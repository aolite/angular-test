import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminDatasetsComponent } from './app-admin-datasets.component';

describe('AppAdminDatasetsComponent', () => {
  let component: AppAdminDatasetsComponent;
  let fixture: ComponentFixture<AppAdminDatasetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminDatasetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminDatasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
