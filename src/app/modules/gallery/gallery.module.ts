import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    GalleryComponent
  ],
  exports: [
    GalleryComponent
  ],
  imports : [
    CommonModule,
    NgbPaginationModule,
  ],
})
export class GalleryModule { }
