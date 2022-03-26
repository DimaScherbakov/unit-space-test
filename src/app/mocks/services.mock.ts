export const serviceMocks = {
    httpClient: jasmine.createSpyObj(['get']),
    searchService: jasmine.createSpyObj(['getStickers']),
    giphyHttpService: jasmine.createSpyObj(['getStickers']),
};
