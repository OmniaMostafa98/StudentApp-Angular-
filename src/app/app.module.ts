import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { DetailsComponent } from './details/details.component';

const routes:Routes =[
  {path:"",component:StudentlistComponent},
  {path:"userDetails/:id",component:DetailsComponent},
  
    
  ]


@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    DetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
