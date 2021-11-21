import { Component, OnInit } from '@angular/core';
import {RecipeShortInfo} from "../../api/interfaces/recipeShortInfo";
import {map, take, tap} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {FoundRecipesService} from "./found-recipes.service";

@Component({
  selector: 'app-found-recipes',
  templateUrl: './found-recipes.component.html',
  styleUrls: ['./found-recipes.component.scss']
})
export class FoundRecipesComponent implements OnInit {
  foundRecipes: RecipeShortInfo[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly foundRecipesService: FoundRecipesService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map(params => {
        this.foundRecipesService.getFoundRecipes(params.searchQuery).pipe(
          tap(res => {
            if(res.length === 0) {
              this.foundRecipes = [];
              this.router.navigate([`**`]);
            }
            else{
              this.foundRecipes = res
            }
          }),
          take(1)
        ).subscribe()
      }),
      take(1)
    ).subscribe()
  }

  onBackClick() {
    this.router.navigate([`search`]);
  }
}
