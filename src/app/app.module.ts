import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ListarComponent } from './components/roles/listar/listar.component';
import { RolService } from './services/rol.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component'
import { AuthService } from './services/auth.service';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoService } from './services/producto.service';
import { UsernameComponent } from './components/login/username/username.component';


@NgModule({
  declarations: [
    UsernameComponent,
    AppComponent,
    MenuComponent,
    FooterComponent,
    ListarComponent,
    LoginComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RolService,AuthService,ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
