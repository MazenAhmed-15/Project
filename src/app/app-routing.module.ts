import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenComponent } from './Categories/men/men.component';
import { WomenComponent } from './Categories/women/women.component';
import { AccessoriesComponent } from './Categories/accessories/accessories.component';
import { CartComponent } from './cart/cart.component';
import { KidsComponent } from './Categories/kids/kids.component';

const routes: Routes = [
  {path : '', redirectTo:'Home' ,pathMatch:'full'},
  {path : "Home", component : HomeComponent, title: "Home"},
  {path : "Login", component : LoginComponent, title: "Login"},
  {path : "Register", component : RegisterComponent, title: "Register"},
  {path : "Cart", component : CartComponent, title: "Cart"},

  {path : "Men", component : MenComponent,title: "Men"},
  {path : "Women", component : WomenComponent,title: "Women"},
  {path : "Kids", component : KidsComponent,title: "Kids"},
  {path : "Accessories", component : AccessoriesComponent,title: "Products"},
  
  {path : '**', component : NotfoundComponent,title: "Error"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {scrollPositionRestoration : 'enabled'})
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
