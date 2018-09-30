import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared.module';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
    { path: 'wishlist', component: WishlistComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    HttpModule,
  ],
  declarations: [WishlistComponent]
})
export class RWishlistModule { }
