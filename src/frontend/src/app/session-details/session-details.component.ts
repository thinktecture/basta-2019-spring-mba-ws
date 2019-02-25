import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionDetailsModel } from '../models/session-details-model';
import { map, tap } from 'rxjs/operators';
import { SessionsService } from '../services/sessions.service';
import { CreateSessionModel } from '../models/create-session-model';
import { isNewline } from 'codelyzer/angular/styles/cssLexer';

@Component({
    selector: 'app-session-details',
    templateUrl: './session-details.component.html'
})
export class SessionDetailsComponent implements OnInit {

    public formModel: FormGroup;

    public isNewForm: boolean;

    constructor(private readonly _sessionsService: SessionsService,
                private readonly _formBuilder: FormBuilder
        , private readonly _activatedRoute: ActivatedRoute) {
        this.formModel = this._formBuilder.group({
            title: ['', RequiredValidator],
            abstract: [''],
            speaker: ['']
        });
    }

    public ngOnInit() {
        this._activatedRoute.data
            .pipe(
                map((data: { isNew?: boolean }) => {
                    return data.isNew;
                }),
            )
            .subscribe(isNew => this.isNewForm = isNew);

        this._activatedRoute.data
            .pipe(
                map((data: { session: SessionDetailsModel }) => {
                    return data.session;
                }))
            .subscribe(session => this.formModel.setValue({
                title: session.title,
                abstract: session.abstract,
                speaker: session.speaker
            }));
    }

    public createNewSession() {
        const newSession = this.formModel.value;
        this._sessionsService.createSession(newSession).subscribe(result => {
            console.log(result);
        })
    }


}
















