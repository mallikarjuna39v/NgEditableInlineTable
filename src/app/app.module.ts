import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {EditableTableComponent} from "./editable-table/editable-table.component";
import {EditableTableService} from "./editable-table/editable-table.service";
@NgModule({
  declarations: [
    AppComponent,
    EditableTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EditableTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
