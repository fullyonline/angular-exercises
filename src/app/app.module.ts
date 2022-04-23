import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ChildTextComponent } from './components/child-text/child-text.component';
import {FormsModule} from "@angular/forms";
import { ParentTextComponent } from './components/parent-text/parent-text.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { AnimalFilterPipePipe } from './pipes/animal-filter-pipe.pipe';
import { JokeServiceComponent } from './components/joke-service/joke-service.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ChildTextComponent,
    ParentTextComponent,
    PipeExampleComponent,
    AnimalFilterPipePipe,
    JokeServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
