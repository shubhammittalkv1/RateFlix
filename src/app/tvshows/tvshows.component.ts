import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {

  constructor(public rest:RestService , private route: ActivatedRoute, private router: Router) { }
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
  ngOnInit() {
  	this.getPopularTvShowData();
    if(JSON.parse(localStorage.getItem('searchParameter')) != undefined){
      localStorage.removeItem('searchParameter');
    }
  }


}
