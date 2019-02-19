import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchForm: FormGroup;
  today = new Date();
  thisYear = this.today.getFullYear();
  loading: Boolean = false;
  iserror: Boolean = false;
  nodata: Boolean = false;
  sResult: any = {};

  constructor(private _formBuilder: FormBuilder, private service: HomeService) { }

  ngOnInit(): void {
    this.sResult.results = [];
    this.searchForm = this._formBuilder.group({
      searchTerm: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$')]],
    });
  }

  getResults(): void {
    console.log('getting results');
    this.sResult.results = [];
    this.loading = true;
    this.iserror = false;
    this.nodata = false;
    const term = this.searchForm.value.searchTerm.replace(/ /g, '+');
    console.log(term);
    this.service.doSearch(term).subscribe(
      result => {
        console.log(result);
        this.loading = false;
        if (!result.results.length) {
          this.nodata = true;
        } else {
          this.sResult = result;
        }

      },
      error => {
        this.loading = false;
        this.iserror = true;
      }
    );
  }
}
