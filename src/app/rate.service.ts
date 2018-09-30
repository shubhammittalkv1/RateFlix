import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class RestService {

  	constructor(private http: HttpClient) { }
  	private extractData(res: Response) {
	  let body = res;
	  return body || { };
	}
	// below method is for perform CRUD Operation
	getData(url): Observable<any> {
	  	return this.http.get(url).pipe(
	    map(this.extractData));
	}
	// end of the above methods used for CRUD operations
	// below method is used to handle the Errors
	private handleError<T> (operation = 'operation', result?: T) {
	  return (error: any): Observable<T> => {

	    // TODO: send the error to remote logging infrastructure
	    console.error(error); // log to console instead

	    // TODO: better job of transforming error for user consumption
	    console.log(`${operation} failed: ${error.message}`);

	    // Let the app keep running by returning an empty result.
	    return of(result as T);
	};
	// end of the above code
}
}
