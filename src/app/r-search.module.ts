import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared.module';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    HttpModule,
  ],
  declarations: [SearchComponent]
})
export class RSearchModule { }
