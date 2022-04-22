import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookRideComponent } from './book-ride/book-ride.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:'login' ,component:LoginComponent},
  {path:'todo' ,component:TodoComponent},
  {path:'todo/:id' ,component:ItemComponent},
  {path:'ride' ,component:BookRideComponent},
  {path:'ride/:id' ,component:ItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
