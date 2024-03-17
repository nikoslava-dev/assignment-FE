import { Component, Input } from '@angular/core';
import { ITable } from '../contracts';

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.scss'
})
export class MyTableComponent {
  @Input() selectedTable: ITable;
}
