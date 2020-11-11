import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../../class/item';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Input() item: Item;
  @Input() isSelected: boolean;

  @Output() selected = new EventEmitter<Item>();
  @Output() unselected = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

}
