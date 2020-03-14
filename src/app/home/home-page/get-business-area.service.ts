import { Injectable } from '@angular/core';
import { IBusinessArea } from '../home-page/business-area';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GetBusinessAreasService {

    private businessAreaUrl = 'http://localhost:8080/businesses';

    constructor(private http: HttpClient){

    }

    getBusinessArea(): Observable<IBusinessArea[]> {
        return this.http.get<IBusinessArea[]>(this.businessAreaUrl)
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