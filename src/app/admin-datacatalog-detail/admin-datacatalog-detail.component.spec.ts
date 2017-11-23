import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDatacatalogDetailComponent } from './admin-datacatalog-detail.component';

describe('AdminDatacatalogDetailComponent', () => {
  let component: AdminDatacatalogDetailComponent;
  let fixture: ComponentFixture<AdminDatacatalogDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDatacatalogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDatacatalogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
