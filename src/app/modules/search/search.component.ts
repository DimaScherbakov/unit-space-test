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
     *
     *
     * @type {EventEmitter<string[]>}
     */
    @Output()result: EventEmitter<GIFObjectExtended[]> = new EventEmitter<GIFObjectExtended[]>();

    constructor (private searchService: SearchService) {}

    /**
     * Get images by user input
     *
     * @param {Observable<string>} text$
     * @return {Observable<[string]>}
     */
  public search: OperatorFunction<string, readonly unknown[]> = (text$: Observable<string>) =>
      text$.pipe(
          debounceTime(500),
          distinctUntilChanged(),
          switchMap(query => this.searchService.getStickers(query)),
          tap(result => this.result.emit(result)),
          /* ngbTypeahead types workaround (it has to return an array) */
          map(() => [])
      )
}
