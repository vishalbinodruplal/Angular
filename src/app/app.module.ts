import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginPage/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AppRoutingModule } from './routers/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HighchartsChartComponent } from 'highcharts-angular';
import { ReleaseStatusChartComponent } from './highcharts/overall-release-status/release-status-chart.component';
import { ProjectWiseSitStatusChartComponent } from './highcharts/overall-sit-status/project-wise-sit-status-chart.component';
import { ProjectExecutionDetailsComponent } from './project-details/project-execution-details/project-execution-details.component';
import { RequestInterceptor } from './interceptors/request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    HighchartsChartComponent,
    ReleaseStatusChartComponent,
    ProjectWiseSitStatusChartComponent,
    ProjectExecutionDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CustomMaterialModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }