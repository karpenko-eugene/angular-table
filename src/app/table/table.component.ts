import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  originalOrder = () => 0;

  replaceText(text) {
    if (this.dataService.searchText.trim()) {
      return text.replace(
        new RegExp('(' + this.dataService.searchText + ')', 'gim'),
        '<mark>$1</mark>',
      );
    }
    return text;
  }
}
