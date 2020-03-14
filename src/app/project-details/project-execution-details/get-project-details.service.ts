import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IProjectExecutionDetails } from './project-execution-details';

@Injectable({
    providedIn: 'root'
})
export class GetProjectDetailsService {

    constructor(private http: HttpClient) { }    

    getProjectExecutionDetails(_selectedPortfolio: String): Observable<IProjectExecutionDetails[]> {
        return this.http.get<IProjectExecutionDetails[]>('http://localhost:8080/business/' + _selectedPortfolio + '/projectdetail')
            .pipe(
                tap(data => console.log('All : ' + JSON.stringify(data))),
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