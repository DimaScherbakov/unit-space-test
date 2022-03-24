import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const params = AuthInterceptor.generateParams(request.params);
    const authRequest = request.clone({params});
    return next.handle(authRequest);
  }

  /**
   * Generates params for every intercepted request
   *
   * @param {HttpParams} requestParams
   * @return {HttpParams}
   * @private
   */
  private static generateParams(requestParams: HttpParams): HttpParams {
    let params = requestParams || new HttpParams();
    params = params.append('api_key', environment.giphyApi.key);
    return params;
  }
}
