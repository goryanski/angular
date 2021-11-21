import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {RecipesApiService} from "./recipes-api.service";

@NgModule({
  declarations: [

  ],
  providers: [
    RecipesApiService
  ],
  imports: [
    HttpClientModule
  ],
})
export class ApiServicesModule { }
