import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {PhotoInterface} from "./interfaces/photo.interface";
import {CommentInterface} from "./interfaces/comment.interface";
import {BrowserLocalStorage} from "../../common/storage/local-storage";
import {AppEnvironment} from "../../common/app-environment.interface";
import {publishReplay, refCount} from "rxjs/operators";

@Injectable()
export class PhotoGalleryApiService {

  readonly options = {
    headers: {
      'Authorization': `Bearer ${this.browserLocalStorage.getItem('accessToken')}`
    }
  };

  constructor(
    private readonly httpClient: HttpClient,
    private readonly appEnv: AppEnvironment,
    private readonly browserLocalStorage: BrowserLocalStorage
  ) {
  }


  getAllPhotos(): Observable<PhotoInterface[]> {
    return this.httpClient.get<PhotoInterface[]>(
      this.appEnv.apiPhotoGalleryURL
    ).pipe(
      publishReplay(1),
      refCount()
    );
  }

  createPhoto(photo: PhotoInterface): Observable<PhotoInterface> {
    return this.httpClient.post<PhotoInterface>(
      this.appEnv.apiPhotoGalleryURL,
      photo,
      this.options
    ).pipe(
      publishReplay(1),
      refCount()
    );
  }

  getPhotoById(id: number): Observable<PhotoInterface> {
    return this.httpClient.get<PhotoInterface>(
      [
        this.appEnv.apiPhotoGalleryURL,
        id
      ].join('/'),
      this.options
    ).pipe(
      publishReplay(1),
      refCount()
    );
  }

  editPhoto(photo: PhotoInterface): Observable<PhotoInterface> {
    return this.httpClient.put<PhotoInterface>(
      this.appEnv.apiPhotoGalleryURL,
      photo,
      this.options
    ).pipe(
      publishReplay(1),
      refCount()
    );
  }

  getComments(photoId: number): Observable<CommentInterface[]> {
    return this.httpClient.get<CommentInterface[]>(
      [
        this.appEnv.apiPhotoGalleryURL,
        'comments',
        photoId
      ].join('/'),
      this.options
    ).pipe(
      publishReplay(1),
      refCount()
    );
  }
}
