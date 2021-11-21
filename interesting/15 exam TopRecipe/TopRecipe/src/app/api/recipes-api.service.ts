import {Injectable} from "@angular/core";
import {AppEnvironment} from "../shared/app-environment.interface";
import {HttpClient} from "@angular/common/http";
import {RecipeShortInfo} from "./interfaces/recipeShortInfo";
import {Observable} from "rxjs";
import {map, publishReplay, refCount, tap} from "rxjs/operators";
import {RecipesPaginate} from "./interfaces/recipesPaginate";
import {RecipeFullInfoResponse} from "./interfaces/recipeFullInfoResponse";
import {SimilarRecipe} from "./interfaces/ similarRecipe";
import {SearchResponse} from "./interfaces/searchResponse";

@Injectable()
export class RecipesApiService {
  constructor(
    private readonly appEnv: AppEnvironment,
    private readonly http: HttpClient
  ) {}

  //#region "Home page"
  getTheMostPopularRecipes(amount: number): Observable<RecipeShortInfo[]>{ //
    return this.http.get<RecipesPaginate>(
      this.getHomePageQuery(amount, 'popularity')
    ).pipe(
      map(res => res.results),
      publishReplay(1),
      refCount()
    );
  }
  getTheHealthiestRecipes(amount: number): Observable<RecipeShortInfo[]> {
    return this.http.get<RecipesPaginate>(
      this.getHomePageQuery(amount, 'healthiness')
    ).pipe(
      map(res => res.results),
      publishReplay(1),
      refCount()
    );
  }
  getTheFastestRecipes(amount: number) {
    return this.http.get<RecipesPaginate>(
      this.getHomePageQuery(amount, 'time', true)
    ).pipe(
      map(res => res.results),
      publishReplay(1),
      refCount()
    );
  }
  getTheCheapestRecipes(amount: number) {
    return this.http.get<RecipesPaginate>(
      this.getHomePageQuery(amount, 'price', true)
    ).pipe(
      map(res => res.results),
      publishReplay(1),
      refCount()
    );
  }

  getHomePageQuery(amount: number, way: string, changeSortDirection: boolean = false): string {
    let sortDirection: string = changeSortDirection ? `sortDirection=asc` : '';
    return [
      this.appEnv.recipesApi.url,
      `complexSearch?apiKey=${this.appEnv.recipesApi.key}&sort=${way}&number=${amount}&` + sortDirection,
    ].join('/')
  }
  //#endregion "Home page"

  //#region "Show product detail info"
  getRecipeById(id: number) : Observable<RecipeFullInfoResponse> {
    return this.http.get<RecipeFullInfoResponse>(
      [
        this.appEnv.recipesApi.url,
        `${id}`,
        `information?apiKey=${this.appEnv.recipesApi.key}`
      ].join('/')
    ).pipe(
      publishReplay(1),
      refCount()
    );
  }
  getSimilarRecipes(id: number, amount: number): Observable<SimilarRecipe[]> {
    return this.http.get<SimilarRecipe[]>(
      [
        this.appEnv.recipesApi.url,
        `${id}`,
        `similar?apiKey=${this.appEnv.recipesApi.key}&number=${amount}`
      ].join('/')
    ).pipe(
      publishReplay(1),
      refCount()
    );
  }
  //#endregion "Show product detail info"

  //#region "Found recipes page"
  getFoundRecipes(query: string, amount: number): Observable<SearchResponse[]> {
    return this.http.get<SearchResponse[]>(
      [
        this.appEnv.recipesApi.url,
        `autocomplete?apiKey=${this.appEnv.recipesApi.key}&number=${amount}&query=${query}`
      ].join('/')
    ).pipe(
      publishReplay(1),
      refCount()
    );
  }
  //#endregion "Search page"
}
