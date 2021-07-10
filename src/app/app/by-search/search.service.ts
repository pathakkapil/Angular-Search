import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
    root: string;
  constructor(private http: HttpClient) { 
    this.root = 'http://www.omdbapi.com/?apikey=4897472c';
  }

  byTitle(s: any) {
    return this.http.get<any>(this.root +"&s=" + s);
  }
}