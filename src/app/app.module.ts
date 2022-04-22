import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookRideComponent } from './book-ride/book-ride.component';
import { SortRidePipe } from './sort-ride.pipe';
import { FilterRidePipe } from './filter-ride.pipe';
import { InnerComponent } from './inner/inner.component';
import { OutterComponent } from './outter/outter.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { RouterOutletComponent } from './router-outlet/router-outlet.component';
import { ItemComponent } from './item/item.component'


@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    StopwatchComponent,
    LoginComponent,
    BookRideComponent,
    SortRidePipe,
    FilterRidePipe,
    InnerComponent,
    OutterComponent,
    RegisterComponent,
    TodoComponent,
    RouterOutletComponent,
    ItemComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
