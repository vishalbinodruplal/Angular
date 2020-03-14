import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule,
  MatInputModule, MatProgressSpinnerModule, MatIconModule, MatMenuModule, MatSelectModule,
  MatTableModule, MatPaginatorModule
 } from '@angular/material';
 import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: []
})
export class CustomMaterialModule { }