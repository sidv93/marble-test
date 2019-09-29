import { combineRoutes, r } from '@marblejs/core';
import { getMoviesEffect$ } from './effects';

const getMovies$ = r.pipe(
    r.matchPath('/:id'),
    r.matchType('GET'),
    r.useEffect(getMoviesEffect$)
);

export const movies$ = combineRoutes(
    '/movies',
    [ getMovies$ ]
);