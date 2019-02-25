import { Injectable } from '@angular/core';
import { SessionDetailsModel } from '../models/session-details-model';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { SessionsService } from '../services/sessions.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SessionResolver implements Resolve<SessionDetailsModel> {
    constructor(private readonly _sessionsService: SessionsService,
                private readonly _router: Router) {

    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<SessionDetailsModel> | Promise<SessionDetailsModel> | SessionDetailsModel {
        // from(mySessionResolver.resolve(ab,cd))

        const id = route.params['id'];
        return this._sessionsService.getSessionDetailsById(id)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    this._router.navigate(['/start']);
                    return of(null);
                })
            );

    }

}
