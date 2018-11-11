import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponentComponent } from './table-component/table-component.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: 'table/:id', component: TableComponentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModel { }
