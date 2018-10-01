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
	      if(this.movieWishList.length != 0){
	      	for(var i=0;i<this.movieWishList.length;i++){
	      		this.movieWishList[i].release_date = this.movieWishList[i].release_date.slice(0,4);
	      	}
	      }
	      
	} else {
	    this.movieWishList = [];
	}
	if(JSON.parse(localStorage.getItem('tvshowWishList')) != undefined){
	    this.tvshowWishList = JSON.parse(localStorage.getItem('tvshowWishList'));
	    if(this.tvshowWishList.length != 0){
	      	for(var i=0;i<this.tvshowWishList.length;i++){
	      		this.tvshowWishList[i].release_date = this.tvshowWishList[i].release_date.slice(0,4);
	      	}
	      }
	} else {
	    this.tvshowWishList = [];
	}
  }

}
