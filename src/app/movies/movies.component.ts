import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rate.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	popularMuvieData: any;
  constructor(public rest:RestService , private route: ActivatedRoute, private router: Router) { }
  // below code is for fetching popular muvies
  	getPopularMoviesData = function(){
  		this.popularMuvieData = {};
  		let apiUrl = "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=c19abc41a4c70dde414361549db1315c";
	    this.rest.getData(apiUrl).subscribe((data: {}) => {
	      	this.popularMuvieData = data;
	      	for(var i=0;i<this.popularMuvieData.results.length;i++){
	      		this.popularMuvieData.results[i].release_date = this.popularMuvieData.results[i].release_date.slice(0,4);
	      	}
	    	console.log(this.popularMuvieData);
	    });
  	}
  	// end of the above code
  ngOnInit() {
  	this.getPopularMoviesData();
    if(JSON.parse(localStorage.getItem('searchParameter')) != undefined){
      localStorage.removeItem('searchParameter');
    }
  }

}
