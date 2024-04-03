import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';

export const appInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = 'my-auth-token';
  // loadService.showSpinner();

  // req = req.clone({
  //   setHeaders: {
  //     // eslint-disable-next-line @typescript-eslint/naming-convention
  //     Authorization: `Bearer ${authToken}`
  //   },
  // });
  return next(req)
    .pipe(
      tap((response) => {
        console.log(response);
        // loadService.hideSpinner();
      }),
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            console.log('No autorizado:' + error);
          } else if (error.status === 500) {
            // toastservice.error('error de token: ' + JSON.stringify(error));
          }
          console.log('error de token: ' + JSON.stringify(error));
        } else {
          console.log('un error ocurrio ' + error);
        }
        // loadService.hideSpinner();
        return throwError(() => Error('otro error'));
      })
    );
};
