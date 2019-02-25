import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionListComponent } from './session-list/session-list.component';
import { StartComponent } from './start/start.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { SessionResolver } from './resolvers/session.resolver';
import { NewSessionResolver } from './resolvers/new-session.resolver';

const routes: Routes = [
    {path: 'session-list', component: SessionListComponent},
    {
        path: 'new-session',
        resolve: {session: NewSessionResolver},
        data: {isNew: true},
        component: SessionDetailsComponent
    },
    {path: 'session-details/:id', resolve: {session: SessionResolver}, component: SessionDetailsComponent},
    {path: 'start', component: StartComponent},
    {path: '', pathMatch: 'full', redirectTo: '/start'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
