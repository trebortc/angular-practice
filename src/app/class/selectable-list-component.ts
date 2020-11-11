import {PageableListComponent} from './pageable-list-component';
import {Component, EventEmitter, Output} from '@angular/core';
import {Item} from './item';

@Component({
  template: ''
})
export abstract class SelectableListComponent extends PageableListComponent{
  @Output() selected = new EventEmitter<Item>();
  @Output() unselected = new EventEmitter<Item>();

  selectedItems: Item[] = [];
  public select(item: Item): void{
    this.selected.emit(item);
    this.selectedItems = [...this.selectedItems, item];
  }

  public unselect(item: Item): void{
    this.unselected.emit(item);
    this.selectedItems = this.selectedItems.filter(({value}) => value !== item.value);
  }

  public isItemSelected(item: Item): boolean{
    return this.selectedItems.some(({label}) => item.label === label);
  }
}
