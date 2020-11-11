import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../../class/item';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Input() itemsPerPage = 2;
  @Input() itemsLength: number;
  @Output() pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  get pages(): Item[] {
    return new Array(this.itemsLength / this.itemsPerPage);
  }

}
