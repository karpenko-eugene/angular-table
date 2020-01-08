import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Store } from '@ngrx/store';
import { AppState, selectCounter } from '../store/table.reducer';
import { Observable } from 'rxjs';
import { decrement, getData, increment } from '../store/table.actions';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  count$: Observable<number>;

  constructor(
    private store: Store<AppState>,
    private dataService: DataService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.count$ = this.store.select(selectCounter);
  }

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

  inc(n: number): void {
    this.store.dispatch(increment({ n }));
  }

  dec(n: number): void {
    this.store.dispatch(decrement({ n }));
  }

  getData(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(json => {
      this.store.dispatch(getData({ json }));
    });
  }
}
