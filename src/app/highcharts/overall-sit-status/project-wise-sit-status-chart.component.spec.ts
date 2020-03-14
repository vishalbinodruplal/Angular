import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWiseSitStatusChartComponent } from './project-wise-sit-status-chart.component';

describe('ProjectWiseSitStatusChartComponent', () => {
  let component: ProjectWiseSitStatusChartComponent;
  let fixture: ComponentFixture<ProjectWiseSitStatusChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectWiseSitStatusChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWiseSitStatusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
