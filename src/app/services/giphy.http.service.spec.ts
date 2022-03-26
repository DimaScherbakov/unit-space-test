import { GiphyHttpService } from './giphy.http.service';
import { serviceMocks } from '../mocks/services.mock';
import { environment } from '../../environments/environment';

describe('Giphy.HttpService', () => {
  const service: GiphyHttpService = new GiphyHttpService(serviceMocks.httpClient);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getStickers should make request to search stickers end-point with given parameters',  () => {
    const endPoint = environment.giphyApi.origin + environment.giphyApi.version + environment.giphyApi.endpoint.searchStickers;
    const params = { limit: 50, bundle: 'clips_grid_picker', q: '' };
    service.getStickers(params);
    expect(serviceMocks.httpClient.get).toHaveBeenCalledOnceWith(endPoint, { params });
  });
});
