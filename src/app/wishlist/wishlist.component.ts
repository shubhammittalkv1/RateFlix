import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
	tvshowWishList : any;
	movieWishList : any;
  constructor() { }

  ngOnInit() {
  	if(JSON.parse(localStorage.getItem('movieWishList')) != undefined){
	      this.movieWishList = JSON.parse(localStorage.getItem('movieWishList'));
	} else {
	    this.movieWishList = [];
	}
	if(JSON.parse(localStorage.getItem('tvshowWishList')) != undefined){
	    this.tvshowWishList = JSON.parse(localStorage.getItem('tvshowWishList'));
	} else {
	    this.tvshowWishList = [];
	}
  }

}
