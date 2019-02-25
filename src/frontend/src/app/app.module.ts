import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StartComponent } from './start/start.component';
import { SessionListComponent } from './session-list/session-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        NavigationComponent,
        RootComponent,
        StartComponent,
        SessionListComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [RootComponent]
})
export class AppModule {
}
