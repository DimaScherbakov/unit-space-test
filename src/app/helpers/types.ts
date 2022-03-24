/**
 * Get type of property
 */
export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];
