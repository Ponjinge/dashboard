import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualSalesChartComponent } from './annual-sales-chart.component';

describe('AnnualSalesChartComponent', () => {
  let component: AnnualSalesChartComponent;
  let fixture: ComponentFixture<AnnualSalesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualSalesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualSalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
