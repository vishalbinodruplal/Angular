import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExecutionDetailsComponent } from './project-execution-details.component';

describe('ProjectExecutionDetailsComponent', () => {
  let component: ProjectExecutionDetailsComponent;
  let fixture: ComponentFixture<ProjectExecutionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectExecutionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectExecutionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
