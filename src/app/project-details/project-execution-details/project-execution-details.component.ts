import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { GetProjectDetailsService } from './get-project-details.service';
import { IProjectExecutionDetails } from './project-execution-details';

@Component({
  selector: 'app-project-execution-details',
  templateUrl: './project-execution-details.component.html',
  styleUrls: ['./project-execution-details.component.css']
})
export class ProjectExecutionDetailsComponent implements OnInit {
  selectedPortfolio: String;
  pageSizeOptions: number[] = [10, 20, 30];
  
  disp: String[];
  projectExeDetails: IProjectExecutionDetails[];
  dataSource: any;
  
  displayedColumns: string[] = [
    'projectName', 'releaseTime', 'resourceName', 'testingType', 'totalTestcase',
    'totalPassed', 'totalFailed', 'totalSkipped'
  ];
  errorMessage: string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private getProjectDetailsService: GetProjectDetailsService) { 
    this.selectedPortfolio = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.getProjectDetailsService.getProjectExecutionDetails(this.selectedPortfolio).subscribe({
      // next(businessArea){ this.businessAreas = businessArea; },
      // error(err) { this.errorMessage = err }
      next: projectExeDetails => {
        this.projectExeDetails = projectExeDetails;
        console.log("&&&&&&&& " + JSON.stringify(this.projectExeDetails));
        this.dataSource = new MatTableDataSource<IProjectExecutionDetails>(this.projectExeDetails);
        this.dataSource.paginator = this.paginator;
      },
      error: err => this.errorMessage = err
  });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.id;
    console.log(value);
  }

}