import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	@Input() cardData: any;
	@Input() whichCate: string;
	movieWishList : any;
	tvshowWishList : any;
  	constructor() { 

  	}
  	pushDataWishList = function(dataObj, whichCate){
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
  		if(whichCate == 'popularMuvie'){
  			var movieListLen = this.movieWishList.length;
  			this.movieWishList[movieListLen] = dataObj;
  			localStorage.setItem('movieWishList', JSON.stringify(this.movieWishList));
  		} else if(whichCate == 'popularTvShow'){
  			var tvShowListLen = this.tvshowWishList.length;
  			this.tvshowWishList[tvShowListLen] = dataObj;
  			localStorage.setItem('tvshowWishList', JSON.stringify(this.tvshowWishList));
  		}
  	}
  	ngOnInit() {
  		this.movieWishList = [];
  		this.tvshowWishList = [];
  	}
}
