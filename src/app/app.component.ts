import { Component } from '@angular/core';
import { GIFObjectExtended } from './interfaces/giphy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * All images by search query
   *
   * @type {GIFObjectExtended[]}
   */
  images: GIFObjectExtended[] = [];

  /**
   * Sets images to application state
   *
   * @param {GIFObjectExtended[]} event
   */
  public setImages(event: GIFObjectExtended[]): void {
    this.images = event;
  }
}
