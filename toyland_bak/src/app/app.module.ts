import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { DirectiveComponent } from './directives.components';
import { MyPipe } from './pipes/myfilter.pipes';
import { QuoteManager } from './quote.component';
import { SearchComponent } from './search.component';
import { DetailsComponent } from './details.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

import { ProductsService } from './services/products.service';

//Configure Routes
const routes:Routes=[
    {path: '', redirectTo: '/welcome', pathMatch: 'full'},
    {path: 'welcome', component:HomeComponent},
    {path: 'list', component:SearchComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HomeComponent, DirectiveComponent, MyPipe, QuoteManager, SearchComponent, DetailsComponent, ParentComponent, ChildComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ProductsService ]
})

export class AppModule { 

}
