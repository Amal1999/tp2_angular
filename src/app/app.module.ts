import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsComponent } from './ex1/tools/tools.component';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { RainbowDirective } from './ex2/directives/rainbow.directive';
import { Ex3Component } from './ex3/ex3.component';
import { CvDetailsComponent } from './ex3/cv-details/cv-details.component';
import { CvItemComponent } from './ex3/cv-item/cv-item.component';
import { ListComponentComponent } from './ex3/list-component/list-component.component';
import { DefaultImagePipe } from './ex3/pipes/default-image.pipe';
import { CvEmbauchesComponent } from './ex3/cv-embauches/cv-embauches.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    Ex1Component,
    Ex2Component,
    RainbowDirective,
    Ex3Component,
    CvDetailsComponent,
    CvItemComponent,
    CvItemComponent,
    ListComponentComponent,
    DefaultImagePipe,
    CvEmbauchesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
