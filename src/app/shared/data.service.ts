import { Injectable } from '@angular/core';
import DATA from './init.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: object[] = DATA;
  perPage = 5;
  curPage = 1;
  searchText = '';
  orderBy = Object.keys(this.data[0])[0];
  orderDir = 1;

  constructor() {}

  get fields(): string[] {
    if (this.data && this.data.length) {
      return Object.keys(this.data[0]);
    } else {
      return [];
    }
  }

  get rows(): object[] {
    return this.filteredData.slice((this.curPage - 1) * this.perPage, this.curPage * this.perPage);
  }

  get filteredData(): object[] {
    return this.data
      .filter(
        e =>
          Object.values(e)
            .join('~')
            .toLowerCase()
            .indexOf(this.searchText.toLowerCase()) > -1,
      )
      .sort((a, b) => {
        return a[this.orderBy] > b[this.orderBy] ? this.orderDir : -1 * this.orderDir;
      });
  }

  get numPages(): number {
    return Math.ceil(this.filteredData.length / this.perPage);
  }

  get dataLength() {
    return this.data.length;
  }

  setOrder(field) {
    field === this.orderBy ? (this.orderDir = -this.orderDir) : (this.orderDir = 1);
    this.orderBy = field;
  }

  updateValue(event, row, key) {
    row[key] = event.target.textContent;
  }
}
