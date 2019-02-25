import { Component, OnInit } from '@angular/core';
import { SessionListModel } from '../models/session-list-model';
import { SessionsService } from '../services/sessions.service';
import { Router } from '@angular/router';

@Component({
    selector: 'basta-session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnInit {

    public allSessions: Array<SessionListModel> = [];

    constructor(
        private readonly _sessionsService: SessionsService,
        private readonly _router: Router) {

    }

    public navigateToSession(session: SessionListModel) {
        this._router.navigate(['session-details',session.id]);
    }

    public ngOnInit(): void {
        this._sessionsService.getAll()
            .subscribe(sessions => {
                    this.allSessions = sessions;
                }
                // onNext // onError // onCompleted
            )
    }

}
