import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SessionListModel } from '../models/session-list-model';
import { environment } from '../../environments/environment';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SessionsService {

    constructor(private readonly _httpClient: HttpClient){}

    public getAll(): Observable<Array<SessionListModel>>{
        const requestUrl = `${environment.api.root}/sessions`;
        return this._httpClient.get<Array<SessionListModel>>(requestUrl)
            .pipe(
                retry(3),
                tap(result => console.log(result)),
                catchError(err => of([]))
            );
    }
}
