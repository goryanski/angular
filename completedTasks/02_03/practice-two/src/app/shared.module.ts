import {BorderDirective} from "./shared/directive/border.directive";
import {NgModule} from "@angular/core";
import {ShadowDirective} from "./shared/directive/shadow.directive";

@NgModule({
  declarations: [
    BorderDirective,
    ShadowDirective
  ],
  imports: [

  ],
  providers: [],
  exports: [
    BorderDirective,
    ShadowDirective
  ]
})
export class SharedModule { }
