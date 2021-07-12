import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  rows: any = [];
  errorMessageLabel: any;
  searchText: any;
  constructor(public httpClient: HttpClient,
    private Search: SearchService,
  ) { }

  ngOnInit(): void {
  }
  byTitle() {
    var Value = this.searchText == undefined ? '' : this.searchText;
    this.Search.byTitle(Value).subscribe(
      data => {
        if (data.Response == "True") {
          this.rows = data.Search;
        }
        else {
          this.errorMessageLabel = data.Error;
        }

      }, error => {
      });
  }
  reSet() {
    this.searchText = "";
    this.rows = [];
    this.errorMessageLabel="";
  }
}
