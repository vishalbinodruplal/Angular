import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseStatusChartComponent } from './release-status-chart.component';

describe('ReleaseStatusChartComponent', () => {
  let component: ReleaseStatusChartComponent;
  let fixture: ComponentFixture<ReleaseStatusChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseStatusChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseStatusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
