import { GIFObject, SearchOptions } from 'giphy-api';
import { PropType } from '../helpers/types';

/**
 * Actual API interface (with tags)
 */
export interface GIFObjectExtended extends GIFObject{
    tags?: string[];
}

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
    limit?: number;
    bundle: string;
}
