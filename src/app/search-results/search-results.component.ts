import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {

  @Input() sResult: any = {};

  constructor() { }

  ngOnInit(): void {}

  testClick(info): void {
    console.log('Test clicked', info);
  }

}
