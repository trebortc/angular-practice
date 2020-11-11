import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {Item} from '../../../class/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() items: Item[] = [];
  @Input() itemsPerPage = 2;
  @Input() currentPage: number;
  @ContentChild('item', { static: false }) template: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void { }

  get start(): number{
    return this.currentPage * this.itemsPerPage;
  }

  get end(): number {
    return this.currentPage * this.itemsPerPage + this.itemsPerPage;
  }
}
