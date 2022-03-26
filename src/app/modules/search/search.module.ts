import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    SearchComponent
  ],
  exports: [
      SearchComponent
  ],
  imports : [
    CommonModule,
    NgbTypeaheadModule,
  ],
})
export class SearchModule { }
