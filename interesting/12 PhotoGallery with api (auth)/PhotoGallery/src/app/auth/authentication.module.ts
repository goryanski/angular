import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {AuthenticationService} from "./authentication.service";
import {AuthenticationComponent} from "./authentication.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    LoginComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService
  ],
  exports: [AuthenticationComponent]
})
export class AuthenticationModule { }
