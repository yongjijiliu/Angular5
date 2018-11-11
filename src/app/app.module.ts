import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedBootstrapModule } from './shared/shared-bootstrap.module';
import { TableComponentComponent } from './table-component/table-component.component';
import { AppRoutingModel } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    TableComponentComponent,
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
