import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SessionListModel } from '../models/session-list-model';
import { environment } from '../../environments/environment';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { SessionDetailsModel } from '../models/session-details-model';
import { CreateSessionModel } from '../models/create-session-model';
import { parseHttpResponse } from 'selenium-webdriver/http';

@Injectable({
    providedIn: 'root'
})
export class SessionsService {

    constructor(private readonly _httpClient: HttpClient) {
    }

    public getAll(): Observable<Array<SessionListModel>> {
        const requestUrl = `${environment.api.root}/sessions`;
        return this._httpClient.get<Array<SessionListModel>>(requestUrl)
            .pipe(
                retry(3),
                tap(result => console.log(result)),
                catchError(err => of([]))
            );
    }

    public getSessionDetailsById(id: string): Observable<SessionDetailsModel> {
        const requestUrl = `${environment.api.root}/sessions/${encodeURIComponent(id)}`;
        return this._httpClient.get<SessionDetailsModel>(requestUrl);
    }

    public createSession(newSession: CreateSessionModel): Observable<boolean> {
        const requestUrl = `${environment.api.root}/sessions`;
        return this._httpClient.post<string>(requestUrl, newSession)
            .pipe(
                map(response => true),
                catchError(error => of(false))
            );
    }
}













