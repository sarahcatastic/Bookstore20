import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable () export class JwtInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do something
      }
    }, (err:any) => {
      if (err instanceof HttpResponse) {
        if (err.status === 401) {
            //redirect
            console.log("error");
            alert("Invalid login");
        }
      }
    }));
  }
}
