import {ListComponent} from './list-component';
import {Item} from './item';
import {Component} from '@angular/core';

@Component({
  template: ''
})
export abstract class PageableListComponent extends ListComponent{
  page = 0;
  itemsPerPage = 2;

  public get start(): number{
    return this.page * this.itemsPerPage;
  }

  public get end(): number{
    return this.page * this.itemsPerPage + this.itemsPerPage;
  }

  public get pages(): Item[]{
    return new Array(this.itemsAll.length / this.itemsPerPage);
  }

  public changePage(page: number): void{
    this.page = page;
  }
}
