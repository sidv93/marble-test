import { combineRoutes } from '@marblejs/core';
import { movies$ } from './movies';

export const api$ = combineRoutes('/api/v1.0', [
    movies$
]);