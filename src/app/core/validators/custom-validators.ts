import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, Subject, concatMap, delay, map, of, tap } from 'rxjs';

export const mail = (control: AbstractControl<unknown, unknown>): ValidationErrors | null => {
    const re = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isvalid = re.test(String(control.value).toLowerCase());

    return !isvalid ? { email: 'el formato de correo no es correcto' } : null;
};

export const isIdPersonValid = (control: AbstractControl<unknown, unknown>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return of(false ? null : { idPerson: 'el id no es valido' })
        .pipe(
            delay(3000),
            tap((resp) => console.log(resp, 'desde el pipe')),
            map((resp) => resp ? { idPerson: resp.idPerson += ' desde el pipe' } : resp),
            concatMap((resp) => resp ? of(resp).pipe(delay(1000)) : of(null))
        );
};

