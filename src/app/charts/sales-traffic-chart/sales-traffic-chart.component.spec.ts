import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTrafficChartComponent } from './sales-traffic-chart.component';

describe('SalesTrafficChartComponent', () => {
  let component: SalesTrafficChartComponent;
  let fixture: ComponentFixture<SalesTrafficChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTrafficChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTrafficChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
