import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  get pages() {
    return new Array(this.dataService.numPages).fill(0).map((e, i) => i + 1);
  }
}
