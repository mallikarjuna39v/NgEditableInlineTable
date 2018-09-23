import { Component } from '@angular/core';
import {EditableTableService} from './editable-table/editable-table.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tableHeaders = ['Header 1', 'Header 2', 'Header 3'];
  addButtonLabel :String = "Add";
  editButtonLabel :String ="Edit" ;
  saveButtonLabel:String ="Save";
  cancelButtonLabel:String = "Cancel";
  deleteButtonLabel:String ="Delete";
  tableRowsWithId: any[][] = [
    [1, 'Header 1', 'Header 2', true],
    [2, 'Header 1', 'Header 2', true]
    ];

  dataType = ['string', 'string', 'boolean'];

  constructor(private service: EditableTableService) {

  }

  ngOnInit() {
    this.service.createTableWithIds(this.tableHeaders, this.tableRowsWithId, this.dataType);
  }

  onRemove(row: any) {
    console.log(row);
  }
}
