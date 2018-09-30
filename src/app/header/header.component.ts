import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RestService } from '../rate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from './data';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchParameter : any;
  currentUrl : any;
  data : Data;
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) {
    this.router = router;
    this.currentUrl  = '';
  }
  @Output() searchkeyword = new EventEmitter();
  // below code is for Search
  	searchWithKeyword = function(value){
  		console.log(value);
      if(value.keyword != null && value.keyword != ''){
        if(value.whichCate == 'Movies'){
          let apiUrlMovie = " https://api.themoviedb.org/3/search/movie?api_key=c19abc41a4c70dde414361549db1315c&query="+ value.keyword +"&page=1";
          this.rest.getData(apiUrlMovie).subscribe((data: {}) => {
            console.log(data);
            console.log(value.whichCate, value.keyword);
            this.data.keyword = value.keyword;
            this.data.whichCate = value.whichCate;
            console.log(this.data.keyword);
            console.log(this.data.whichCate);
            localStorage.setItem('searchParameter', JSON.stringify(value));
            this.searchkeyword.emit(this.data);
            this.router.navigateByUrl('/rsearch/search');
          });
        } else{
          let apiUrlTvShow = "https://api.themoviedb.org/3/search/tv?api_key=c19abc41a4c70dde414361549db1315c&query= " + value.keyword + "&page=1";
          this.rest.getData(apiUrlTvShow).subscribe((data: {}) => {
            console.log(data);
            this.data.keyword = value.keyword;
            this.data.whichCate = value.whichCate;
            localStorage.setItem('searchParameter', JSON.stringify(value));
            this.searchkeyword.emit(this.data);
            this.router.navigateByUrl('/rsearch/search');
          });
        }
      } else {
        alert("Keyword Field can't be Empty");
      }

      console.log("In the Search With Keyword Method");
  	}
  // end of above code
  // below method is used to change the route
    changeRoute = function(routeValue){
      if(routeValue == "home"){
        if(JSON.parse(localStorage.getItem('searchParameter')) != undefined){
          localStorage.removeItem('searchParameter');
        }
        this.router.navigateByUrl('/rhome/home');
      }
      if(routeValue == "movies"){
        if(JSON.parse(localStorage.getItem('searchParameter')) != undefined){
          localStorage.removeItem('searchParameter');
        }
        this.router.navigateByUrl('/rmovies/movies');
      }
      if(routeValue == "tvshows"){
        if(JSON.parse(localStorage.getItem('searchParameter')) != undefined){
          localStorage.removeItem('searchParameter');
        }
        this.router.navigateByUrl('/rtvshows/tvshows');
      }
      if(routeValue == "wishlist"){
        if(JSON.parse(localStorage.getItem('searchParameter')) != undefined){
          localStorage.removeItem('searchParameter');
        }
        this.router.navigateByUrl('/rwishlist/wishlist');
      }
    }
  // end of above code
  // below code is for finding the current URL
  getCurrentUrl = function(){
    if(this.router.url === '/rhome/home'){
      this.currentUrl = 'home';
    } else if(this.router.url === '/rmovies/movies'){
      this.currentUrl = 'movies';
    } else if(this.router.url === '/rtvshows/tvshows'){
      this.currentUrl = 'tvshows';
    } else if(this.router.url === '/rwishlist/wishlist'){
      this.currentUrl = 'wishlist';
    }

  }
  // end of above code
  ngOnInit() {
    this.searchParameter = {};
    if(JSON.parse(localStorage.getItem('searchParameter')) != undefined){
      this.searchParameter = JSON.parse(localStorage.getItem('searchParameter'));
    } else {
      this.searchParameter.whichCate = "Movies";
    }
    this.getCurrentUrl();
  }

}
