import { HttpEffect, HttpStatus, use, HttpError, HttpRequest } from "@marblejs/core";
import { requestValidator$, t } from '@marblejs/middleware-io';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
// import { MoviesDao } from '../model';
import { of, throwError } from "rxjs";

const validator$ = requestValidator$({
    params: t.type({
      id: t.string,
    })
});

export const getMoviesEffect$: HttpEffect = req$ => 
    req$.pipe(
        tap(_ => console.log('in get movies effect', _.params)),
        use(validator$),
        tap(val => console.log('in Get movies effect')),
        mergeMap((req) => of(req.params.id).pipe(
            mergeMap(MoviesDao.findOneByImdbID),
            map(movie => ({ body: [{"name": "Super Deluxe"}]})),
            catchError(() => throwError(
                new HttpError('Movie does not exist', HttpStatus.NOT_FOUND)
            ))
        ))
    );