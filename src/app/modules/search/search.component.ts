import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { SearchService } from './search.service';
import { GIFObjectExtended } from '../../interfaces/giphy';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
    /**
     * Emit set of images found by user query
     *
     * @type {EventEmitter<string[]>}
     */
    @Output()searchResult: EventEmitter<GIFObjectExtended[]> = new EventEmitter<GIFObjectExtended[]>();

    constructor (private searchService: SearchService) {}

    /**
     * Get images by user input
     *
     * @param {Observable<string>} text$
     * @return {Observable<[string]>}
     */
  public search: OperatorFunction<string, GIFObjectExtended[]> = (text$: Observable<string>) =>
      text$.pipe(
          debounceTime(500),
          distinctUntilChanged(),
          switchMap(query => this.searchService.getStickers(query)),
          tap(result => this.searchResult.emit(result)),
          /* ngbTypeahead types workaround (it has to return an array) */
          map(() => [])
      )
}
