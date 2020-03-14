import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { tap, catchError } from 'rxjs/operators';
import { IOverallReleaseStatus } from './overall-release-status/overall-release-status';

@Injectable({
    providedIn: 'root'
})
export class OverallReleaseExecutionStatus {

    private baseUrl = "http://localhost:8080/overallpassed/SIT";

    constructor( private http: HttpClient) { }

    getOverallReleaseExecutionStatus(): Observable<IOverallReleaseStatus[]> {
        return this.http.get<IOverallReleaseStatus[]>(this.baseUrl)
        .pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      }

}