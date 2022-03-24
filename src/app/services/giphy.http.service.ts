import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MultiResponse, SearchOptions } from 'giphy-api';
import { Observable } from 'rxjs';
import { SearchOptionsSimplified } from '../interfaces/giphy';
import { giphyApiConfig } from '../config';

@Injectable({
  providedIn: 'root'
})
export class GiphyHttpService {
  /**
   * Base url for giphy-api
   *
   * @type {string}
   * @private
   */
  private url: string = environment.giphyApi.origin + environment.giphyApi.version;

  constructor(private http: HttpClient) {}

  /**
   * Get stickers by query
   *
   * @param {giphyApi.SearchOptions} passedParams
   * @return {Observable<giphyApi.MultiResponse>}
   */
  public getStickers(passedParams: SearchOptionsSimplified):Observable<MultiResponse> {
    const params: SearchOptionsSimplified = { ...giphyApiConfig, ...passedParams };
    return this.http.get<MultiResponse>(
        this.url + environment.giphyApi.endpoint.searchStickers,
        {params}
    );
  }
}
