import { Component, OnInit } from '@angular/core';
import {SelectableListComponent} from '../../class/selectable-list-component';

@Component({
  selector: 'app-customers-list2',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersList2Component extends SelectableListComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
