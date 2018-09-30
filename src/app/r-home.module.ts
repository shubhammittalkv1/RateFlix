import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared.module';

const routes: Routes = [
    { path: 'home', component: HomeComponent }
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    HttpModule,
	],
	  exports: [RouterModule],
  	declarations: [ HomeComponent ]
})
export class RHomeModule { }
