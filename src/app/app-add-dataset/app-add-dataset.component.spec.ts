import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddDatasetComponent } from './app-add-dataset.component';

describe('AppAddDatasetComponent', () => {
  let component: AppAddDatasetComponent;
  let fixture: ComponentFixture<AppAddDatasetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAddDatasetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAddDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
