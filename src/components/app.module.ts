import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { ChildTextComponent } from './child-text/child-text.component';
import {FormsModule} from "@angular/forms";
import { ParentTextComponent } from './parent-text/parent-text.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildTextComponent,
    ParentTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
