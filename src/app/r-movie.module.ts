import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared.module';
const routes: Routes = [
    { path: 'movies', component: MoviesComponent }
];

@NgModule({
  imports: [
  	SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    HttpModule,
  ],
  declarations: [MoviesComponent]
})
export class RMovieModule { }
