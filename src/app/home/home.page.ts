import { Component, OnInit } from '@angular/core';
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

  constructor(private _formBuilder: FormBuilder, private service: HomeService) { }

  ngOnInit(): void {
    this.searchForm = this._formBuilder.group({
      searchTerm: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$')]],
    });
  }

  getResults(): void {
    const term = this.searchForm.value.searchTerm;
    // alert(term);
    this.service.doSearch(term).subscribe(
      result => {
          // this.modal.closeAll();
          alert('Success' + JSON.stringify(result));
      },
      error => {
          // this.modal.closeAll();
          // throw (error);
          alert('Error occured' + JSON.stringify(error));
      }
  );
  }
}
