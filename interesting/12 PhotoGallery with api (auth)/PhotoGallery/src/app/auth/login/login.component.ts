import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  pattern = {
    login: '^[a-zA-Z_]{4,14}$', // English letters only, symbol _ (4-14 symbols)
  }

  constructor(
    private fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthenticationService
  ) {
    this.form = this.fb.group({
      'username': this.fb.control(
        'vasya',
        [
          Validators.required,
          Validators.pattern(this.pattern.login)
        ]
      ),
      'password': this.fb.control(
        '123456',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(16)
        ]
      )
    })
  }

  ngOnInit(): void {
  }

  onBackClick() {
    this.router.navigate(['/']);
  }

  onLoginClick() {
    if (this.form.valid) {
      //const account: AccountInterface = this.form.value;
      const { username, password } = this.form.value;
      this.authService.login(username, password, 'USER').pipe(take(1)).subscribe();
    }
  }
}
