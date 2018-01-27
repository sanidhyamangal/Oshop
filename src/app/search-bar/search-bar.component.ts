import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output('filter-key') filterKey = new EventEmitter();
  constructor() { }
  filter(query:String){
    this.filterKey.emit(query);
  }
}
