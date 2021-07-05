import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { LifeComponent } from './component/life/life.component';
import { NewsComponent } from './component/news/news.component';
import { InterfaceComponent } from './component/interface/interface.component';


const routes: Routes = [
  {
    path: 'about/:assad',
    component: AboutComponent,
    children: []
  }, {
    path: 'home',
    component: HomeComponent,
    children: []
  }, {
    path: 'life',
    component: LifeComponent,
    children: []
  }, {
    path: 'news',
    component: NewsComponent,
    children: []
  // }, {
  //   path: '**',
  //   // redirectTo: 'about',
  //   component: AppComponent
  }, {
    path: 'interface',
    component: InterfaceComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
