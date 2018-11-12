import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedBootstrapModule } from './shared/shared-bootstrap.module';
import { TableComponentComponent } from './table-component/table-component.component';
import { AppRoutingModel } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponentComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    SharedBootstrapModule,
    AppRoutingModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
