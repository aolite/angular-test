import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapChartDatasourcesComponent } from './map-chart-datasources.component';

describe('MapChartDatasourcesComponent', () => {
  let component: MapChartDatasourcesComponent;
  let fixture: ComponentFixture<MapChartDatasourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapChartDatasourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapChartDatasourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
