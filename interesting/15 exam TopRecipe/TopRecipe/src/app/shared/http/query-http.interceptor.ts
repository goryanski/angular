import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class QueryHttpInterceptor implements HttpInterceptor {
  constructor(
    private readonly router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(err => {
        if (err.status === 404) {
          // to not-found page
          this.router.navigate(['/**']);
          return of(err.message);
        }
        return throwError(err);
      })
    );
  }
}
