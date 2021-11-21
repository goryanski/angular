import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthApiService} from "../api/auth/auth-api.service";
import {BrowserLocalStorage} from "../common/storage/local-storage";

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly authService: AuthApiService,
    private readonly localStorage: BrowserLocalStorage,
    private readonly router: Router
  ) {
  }

  login(email: string, password: string, role: string): Observable<string> {
    return this.authService.login(email, password, role).pipe(
      map(jwtResp => jwtResp.accessToken),
      tap((token: string) => {
        //console.log('jwtResp - token str: ', token);
        // Save token to localStorage
        this.localStorage.setItem('accessToken', token);
        // Redirect to home
        this.router.navigate(['/']);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!this.localStorage.getItem('accessToken');
  }
}
