import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GIFObjectExtended } from '../../interfaces/giphy';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {
  /**
   * All images
   *
   * @type {GIFObjectExtended[]}
   */
  @Input() public images: GIFObjectExtended[] = [];

  /**
   * Current page
   *
   * @type {number}
   */
  @Input() public page: number = 1;

  /**
   * Count of images per page
   *
   * @type {number}
   */
  @Input() public pageSize: number = 9;

  /**
   * Start of a set to display
   *
   * @return {number}
   */
  get start(): number {
    return (this.page - 1) * this.pageSize;
  }

  /**
   * End of a set to display
   *
   * @return {number}
   */
  get end(): number {
    return this.start + this.pageSize;
  }
}
