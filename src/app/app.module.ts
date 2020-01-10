import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { ToDoItemsComponent } from './components/to-do-items/to-do-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
