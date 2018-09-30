import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	keyword : any;
	whichCate : any;
	searchParameter : any;
	searchData : any;
  	constructor(public rest:RestService , private route: ActivatedRoute, private router: Router) {

  	}
  	getSearchData = function(data){
  		this.searchData = data;
  		this.keyword = data.keyword;
  		this.whichCate = data.whichCate;
  	}
  	getSearchDataInit = function(value){
  		console.log(value);
      	if(value.keyword != null && value.keyword != ''){
        	if(value.whichCate == 'Movies'){
          	let apiUrlMovie = " https://api.themoviedb.org/3/search/movie?api_key=c19abc41a4c70dde414361549db1315c&query="+ value.keyword +"&page=1";
          	this.rest.getData(apiUrlMovie).subscribe((data: {}) => {
            	console.log(data);
            	this.searchData = data;
            	this.keyword = value.keyword;
  				this.whichCate = value.whichCate;
            });
        	} else{
	          let apiUrlTvShow = "https://api.themoviedb.org/3/search/tv?api_key=c19abc41a4c70dde414361549db1315c&query= " + value.keyword + "&page=1";
	          this.rest.getData(apiUrlTvShow).subscribe((data: {}) => {
	            console.log(data);
	            this.searchData = data;
	            this.keyword = value.keyword;
  				this.whichCate = value.whichCate;
	        });
        }
      } else {
        alert("Keyword Field can't be Empty");
        // this.searchkeyword.emit(data);
      }
		console.log("In the Search With Keyword Method");
  	}
  	ngOnInit() {
  		console.log("In Search Component");
  		this.searchData = {};
  		if(JSON.parse(localStorage.getItem('searchParameter')) != undefined){
	      this.searchParameter = JSON.parse(localStorage.getItem('searchParameter'));
	      this.getSearchDataInit(this.searchParameter);
	    } else {
	      this.searchParameter.whichCate = "Movies";
	    }
	    if(JSON.parse(localStorage.getItem('searchParameter')) != undefined){
        localStorage.removeItem('searchParameter');
      }
  	}

}
