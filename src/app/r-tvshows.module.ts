import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared.module';

const routes: Routes = [
    { path: 'tvshows', component: TvshowsComponent }
];

@NgModule({
  imports: [
  	SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    HttpModule,
  ],
  declarations: [TvshowsComponent]
})
export class RTvshowsModule { }
