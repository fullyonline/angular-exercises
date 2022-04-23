import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParentTextComponent} from "./components/parent-text/parent-text.component";
import {JokeServiceComponent} from "./components/joke-service/joke-service.component";
import {PipeExampleComponent} from "./components/pipe-example/pipe-example.component";
import {AppComponent} from "./components/app/app.component";

const routes: Routes = [
  { path: 'parent', component: ParentTextComponent },
  { path: 'joke', component: JokeServiceComponent },
  { path: 'pipe', component: PipeExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
