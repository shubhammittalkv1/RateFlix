import { Component,OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private route: ActivatedRoute, private router: Router) {
		this.router = router;
	}
  	ngOnInit() {
  		this.router.navigateByUrl('/rhome/home');
  	}
}
