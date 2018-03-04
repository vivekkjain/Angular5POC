import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {DataService} from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';

const appRoutes: Routes = [
{
path: '',
component: HomeComponent
},
{
path: 'about',
component: AboutComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
