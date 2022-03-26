import { Injectable } from '@angular/core';
import { GIFObjectExtended } from '../../interfaces/giphy';
import { MultiResponse } from 'giphy-api';
import { Observable } from 'rxjs';
import { GiphyHttpService } from '../../services/giphy.http.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor (private giphyHttpService: GiphyHttpService) {}

    /**
     * Get a set of images by user query
     *
     * @param {string} query
     * @return {Observable<GIFObjectExtended[]>}
     */
  public getStickers(query: string):Observable<GIFObjectExtended[]> {
      const tags = SearchService.getTags(query);
      const stickerRequests: Observable<MultiResponse>[] = tags.map(q => this.giphyHttpService.getStickers({q}));
      return forkJoin<MultiResponse[]>(stickerRequests).pipe(map((stickersByTags) => {
          const allStickers: GIFObjectExtended[] = SearchService.flatAllStickers(stickersByTags);
          return SearchService.getIntersection(allStickers, tags);
      }));
  }

    /**
     * Get a flat set of images originally grouped by user queries
     *
     * @param {giphyApi.MultiResponse[]} stickersByGroups
     * @return {GIFObjectExtended[]}
     * @private
     */
  private static flatAllStickers(stickersByGroups: MultiResponse[]): GIFObjectExtended[] {
      const flat = stickersByGroups.map(({data}) => data).flat();
      return [...new Set(flat)];
  }

    /**
     * Get tags from user input
     *
     * @param {string} query
     * @return {string[]}
     * @private
     */
  private static getTags(query: string): string[]{
    return query.split('#').filter(tag => !!tag);
  }

    /**
     * Get images set that is an interception by tags
     *
     * @param {GIFObjectExtended[]} stickers
     * @param {string[]} tags
     * @return {GIFObjectExtended[]}
     * @private
     */
  private static getIntersection(stickers: GIFObjectExtended[], tags: string[]): GIFObjectExtended[] {
      return stickers.filter(gif => {
          const gifTags: string[] | undefined = gif.tags;
          return tags.every(tag => gifTags?.includes(tag))
      });
  }
}
