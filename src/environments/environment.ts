// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  giphyApi: {
    /* use key from https://giphy.com/ because response by my user key doesn't return tags */
    key: 'Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g',
    origin: 'https://api.giphy.com/',
    version: 'v1/',
    endpoint: {
      searchStickers: 'stickers/search'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
