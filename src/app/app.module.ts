import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { ResultsPipe } from './results.pipe';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { ResultsService } from "./results.service";

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    ResultsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ResultsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
