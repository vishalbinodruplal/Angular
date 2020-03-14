import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../loginPage/login.component';
import { HomePageComponent } from '../home/home-page/home-page.component';
import { ProjectExecutionDetailsComponent } from '../project-details/project-execution-details/project-execution-details.component';

const routes: Routes = [
    { path: 'project-details/:id', component: ProjectExecutionDetailsComponent },
    { path: 'home-page', component: HomePageComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }