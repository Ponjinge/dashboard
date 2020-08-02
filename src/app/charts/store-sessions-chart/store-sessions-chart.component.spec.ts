import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSessionsChartComponent } from './store-sessions-chart.component';

describe('StoreSessionsChartComponent', () => {
  let component: StoreSessionsChartComponent;
  let fixture: ComponentFixture<StoreSessionsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSessionsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSessionsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
