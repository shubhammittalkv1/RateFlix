import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatformLocation, Location, LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF} from '@angular/common';
const routes: Routes = [
	{ path: 'rhome', loadChildren: './r-home.module#RHomeModule'},
	{ path: 'rmovies', loadChildren: './r-movie.module#RMovieModule'},
	{ path: 'rtvshows', loadChildren: './r-tvshows.module#RTvshowsModule'},
	{ path: 'rwishlist', loadChildren: './r-wishlist.module#RWishlistModule'},
	{ path: 'rsearch', loadChildren: './r-search.module#RSearchModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
