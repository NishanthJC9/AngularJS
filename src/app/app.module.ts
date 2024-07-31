import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { PipesComponent } from './pipes/pipes.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { CountComponent } from './count/count.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    UserComponent,
    PipesComponent,
    LifecycleComponent,
    CountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
