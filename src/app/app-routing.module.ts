import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { PipesComponent } from './pipes/pipes.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "nav", component: NavComponent},
  {path: "main", component: MainComponent},
  {path: "footer", component: FooterComponent},
  {path: "child", component: ChildComponent},
  {path: "header", component: HeaderComponent},
  {path: "user/:id/:name", component: UserComponent},
  {path: "pipes", component: PipesComponent},
  {path: "lifecycle", component: LifecycleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
