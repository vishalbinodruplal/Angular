import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`Before : ${req.url}`);
        let token: string = localStorage.getItem('my-token');

        if(token!=null){
            let jsonReq: HttpRequest<any> = req.clone({
                setHeaders: {
                    'content-type' : 'application/json',
                    'Authorization' : `Bearer ${token}`
                }
            });
            return next.handle(jsonReq);
        } else {
            let jsonReq: HttpRequest<any> = req.clone({
                setHeaders: {
                    'content-type' : 'application/json',
                }
            });
            return next.handle(jsonReq);
        }
        
        // let jsonReq: HttpRequest<any> = req.clone({
        //     setHeaders: {
        //         'content-type' : 'application/json',
        //         'Authorization' : `Bearer ${token}`
        //     }
        // });
        //return next.handle(jsonReq);
    }

}