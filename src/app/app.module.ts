import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { AdminLinkDirective } from './admin-link.directive';
import { AdminModule } from './admin/admin.module';
import { ConvertToEuroPipe } from './convert-to-euro.pipe';
import { BackendApiService } from './backend-api.service';

import { NewsComponent } from './component/news/news.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { LifeComponent } from './component/life/life.component';
import { InterfaceComponent } from './component/interface/interface.component';

@NgModule({
  declarations: [
    AppComponent,// 指令
    SiteHeaderComponent,// 组件
    AdminLinkDirective,// 指令
    ConvertToEuroPipe, // 管道
    NewsComponent, HomeComponent, AboutComponent, LifeComponent, InterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    BackendApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
