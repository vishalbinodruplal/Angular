import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginDetails } from '../loginPage/login';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginResponse } from '../loginPage/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:8080/authenticate';

  constructor(private http: HttpClient) { }

  performLogin(loginDetails: LoginDetails): Observable<LoginDetails | LoginResponse> {
    return this.http.post<LoginDetails>(this.loginUrl, loginDetails)
      .pipe(
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
