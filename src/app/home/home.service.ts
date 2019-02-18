import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl = 'https://itunes.apple.com/search?term=';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  doSearch(search): any {
    return this.httpClient.get(baseUrl + search);
  }
}
