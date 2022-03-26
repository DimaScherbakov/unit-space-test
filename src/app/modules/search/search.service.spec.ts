import { SearchService } from './search.service';
import { serviceMocks } from '../../mocks/services.mock';

describe('SearchService', () => {
  const service = new SearchService(serviceMocks.giphyHttpService);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getStickers makes http requests by count of passed hashtags', () => {
    const query = '#one#two#three';
    service.getStickers(query).subscribe(() => {
      expect(serviceMocks.giphyHttpService.getStickers).toHaveBeenCalledTimes(3);
    });
  });
});
