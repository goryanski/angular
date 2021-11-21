import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {publishReplay, refCount} from "rxjs/operators";
import {AppEnvironment} from "../../common/app-environment.interface";

interface JwtResponse {
  accessToken: string;
}

@Injectable()
export class AuthApiService {
  constructor(
    private readonly http: HttpClient,
    private readonly appEnv: AppEnvironment
  ) { }


  login(username: string, password: string, role: string): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(
      [
        this.appEnv.apiPhotoGalleryURL,
        'auth',
        'login'
      ].join('/'),
      {
        username,
        password,
        role
      },
      {
        headers: {
          'Authorization': 'Bearer token',
        }
      }
    ).pipe(
      publishReplay(1),
      refCount()
    )
  }
}
