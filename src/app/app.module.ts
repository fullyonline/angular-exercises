import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ChildTextComponent } from './components/child-text/child-text.component';
import {FormsModule} from "@angular/forms";
import { ParentTextComponent } from './components/parent-text/parent-text.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { AnimalFilterPipePipe } from './pipes/animal-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildTextComponent,
    ParentTextComponent,
    PipeExampleComponent,
    AnimalFilterPipePipe
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
