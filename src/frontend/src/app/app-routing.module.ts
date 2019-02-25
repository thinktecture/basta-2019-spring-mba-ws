import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionListComponent } from './session-list/session-list.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
    {path: 'session-list', component: SessionListComponent},
    {path: 'start', component: StartComponent},
    {path: '', pathMatch: 'full', redirectTo: '/start'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
