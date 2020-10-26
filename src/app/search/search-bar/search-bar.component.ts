import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      keyword: ''
    });

    this.searchForm.valueChanges.subscribe(form => this.searchService.keywordChanged(form.keyword));
  }

}
