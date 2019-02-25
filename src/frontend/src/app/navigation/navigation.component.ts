import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
    selector: 'basta-navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit, OnDestroy {
    private _subscription: Subscription = null;
    public datum: Date = new Date();

    public ngOnInit(): void {
        this._subscription = interval(1000)
            .pipe()
            .subscribe(() => this.datum = new Date());
    }

    public ngOnDestroy(): void {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }


}
