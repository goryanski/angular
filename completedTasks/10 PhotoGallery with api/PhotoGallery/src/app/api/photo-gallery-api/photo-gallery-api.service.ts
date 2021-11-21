import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {PhotoInterface} from "./interfaces/photo.interface";
import {CommentInterface} from "./interfaces/comment.interface";

@Injectable()
export class PhotoGalleryApiService {
  readonly apiUrl: string = '';
  constructor(
    private readonly httpClient: HttpClient
  ) {
    this.apiUrl = environment.apiPhotoGalleryURL;
  }

  getAllPhotos(): Observable<PhotoInterface[]> {
    return this.httpClient.get<PhotoInterface[]>(this.apiUrl);
  }

  createPhoto(photo: PhotoInterface): Observable<PhotoInterface> {
    return this.httpClient.post<PhotoInterface>(this.apiUrl, photo);
  }

  getPhotoById(id: number): Observable<PhotoInterface> {
    return this.httpClient.get<PhotoInterface>([this.apiUrl, id].join('/'));
  }

  editPhoto(photo: PhotoInterface): Observable<PhotoInterface> {
    return this.httpClient.put<PhotoInterface>(this.apiUrl, photo);
  }

  getComments(photoId: number): Observable<CommentInterface[]> {
    return this.httpClient.get<CommentInterface[]>(
      [
        this.apiUrl,
        'comments',
        photoId
      ].join('/')
    );
  }
}
