import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CreateSessionModel } from '../models/create-session-model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NewSessionResolver implements Resolve<CreateSessionModel> {
    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<CreateSessionModel> | Promise<CreateSessionModel> | CreateSessionModel {
        return CreateSessionModel.createEmpty();
    }

}
