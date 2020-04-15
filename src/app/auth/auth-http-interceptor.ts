import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

@Injectable() // For Interceptor { providedIn: 'root' } won't be provided inside injectable
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //Modify or log the outgoing request
    //  req.withCredentials = true; // we cannot modify exisiting req properties all are read only
    const modifiedReq = req.clone({
      withCredentials: true,
    });
    return next.handle(modifiedReq);
    /* 
    // in case if we want to tap on intercepting messages
      .pipe(
        filter((val) => val.type === HttpEventType.Sent), // optional - to recive only the request sent status
        tap((val) => {
          console.log('Sent the request');
       if (val.type === HttpEventType.Sent) {
          console.log('Request was sent to server');
        }
        if (val.type === HttpEventType.Response) {
          console.log('Response recieved from API', val);
        } 
        })
      );
      */
    //next.handle returns a observable from which status of request and response can be checked
  }
}
