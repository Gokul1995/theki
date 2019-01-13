import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThekiNavComponent } from './theki-nav/theki-nav.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { ThekiFooterComponent } from './theki-footer/theki-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ThekiNavComponent,
    HomeComponent,
    ThekiFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
