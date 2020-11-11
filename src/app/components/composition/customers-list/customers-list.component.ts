import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  @Input() items = [];
  currentPage = 0;
  selectedItems = [];

  constructor() { }

  ngOnInit(): void {
  }

  selected(item): void {
    this.selectedItems = [...this.selectedItems, item];
  }

  unselected(item): void {
    this.selectedItems = this.selectedItems.filter(
      ({ value }) => value !== item.value
    );
  }

  isItemSelected(item): boolean {
    return this.selectedItems.some(({ value }) => item.value === value);
  }

}
