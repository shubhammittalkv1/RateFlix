import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	popularMuvieData : any;
  	popularTvShowData : any;
  	isDisplayingSearchData : boolean;
  	constructor(public rest:RestService , private route: ActivatedRoute, private router: Router) { }
  	// below code is for fetching popular muvies
  	getPopularMoviesData = function(){
  		let apiUrl = "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=c19abc41a4c70dde414361549db1315c";
	    this.rest.getData(apiUrl).subscribe((data: {}) => {
	      	this.popularMuvieData = data;
	      	for(var i=0;i<this.popularMuvieData.results.length;i++){
	      		this.popularMuvieData.results[i].release_date = this.popularMuvieData.results[i].release_date.slice(0,4);
	      	}
	    });
  	}
  	// end of the above code
  	// below code is for fetching popular TV Show
  	getPopularTvShowData = function(){
  		this.popularTvShowData = {};
  		let apiUrl = "https://api.themoviedb.org/3/tv/popular?page=1&language=en-US&api_key=c19abc41a4c70dde414361549db1315c";
	    this.rest.getData(apiUrl).subscribe((data: {}) => {
	      	this.popularTvShowData = data;
	      	for(var i=0;i<this.popularTvShowData.results.length;i++){
	      		this.popularTvShowData.results[i].first_air_date = this.popularTvShowData.results[i].first_air_date.slice(0,4);
	      	}
	      	
	    });
  	}
  	// end of the above code
  	// below function is used to get the search data from Child component
  	getSearchData = function(data){
  		
  		this.searchData = data;
  		if(this.searchData.total_results != 0){
  			this.isDisplayingSearchData = true;
  		} else {
  			this.isDisplayingSearchData = false;
  		}
	}
  	// end of above code
  	ngOnInit() {
  		this.isDisplayingSearchData = false;
		this.getPopularMoviesData();
		this.getPopularTvShowData();
    if(JSON.parse(localStorage.getItem('searchParameter')) != undefined){
      localStorage.removeItem('searchParameter');
    }
    
  	}

}
