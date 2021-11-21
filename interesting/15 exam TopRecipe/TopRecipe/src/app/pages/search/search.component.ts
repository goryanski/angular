import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly router: Router
  ) {
    this.form = new FormGroup({
      'searchField': new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  onSearchClick() {
    const searchQuery: string = this.form.value['searchField'];
    this.router.navigate([`found-recipes/${searchQuery}`]);
  }
}
