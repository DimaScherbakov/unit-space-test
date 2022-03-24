import { SearchOptions } from 'giphy-api';
import { PropType } from '../helpers/types';

type RatingRequired = PropType<SearchOptions, 'rating'>;
type RatingOptional = { rating?: RatingRequired };

/**
 * Giphy search options simplified for http request (rating is optional)
 */
export type SearchOptionsSimplified =  Omit<SearchOptions, 'rating'> & RatingOptional;

/**
 * Interface for giphy-api config
 */
export interface GiphyApiConfig {
    limit: number;
    bundle: string;
}
