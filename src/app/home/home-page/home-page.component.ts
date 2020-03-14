import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetBusinessAreasService } from '../home-page/get-business-area.service';
import { IBusinessArea } from './business-area';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  selected = 'option1';
  businessAreas : IBusinessArea[];
  errorMessage : String;

  constructor(private getBusinessAreaService : GetBusinessAreasService,
                  private router: Router) { }

   ngOnInit() {
      this.getBusinessAreaService.getBusinessArea().subscribe({
          // next(businessArea){ this.businessAreas = businessArea; },
          // error(err) { this.errorMessage = err }
          next: businessAreas => {
            this.businessAreas = businessAreas;
            console.log(this.businessAreas);
          },
          error: err => this.errorMessage = err
      });
   }

   viewProjectDetails(): void {
     //console.log("Option = " + this.selected);
     this.router.navigate(['/project-details/', this.selected]);
   }

}