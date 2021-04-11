import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArbitreComponent } from './component/arbitre/arbitre.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ListeArbitreComponent } from './component/liste-arbitre/liste-arbitre.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddarbitreComponent } from './component/addarbitre/addarbitre.component';

@NgModule({
  declarations: [
    AppComponent,
    ArbitreComponent,
    HeaderComponent,
    FooterComponent,
    ListeArbitreComponent,
    AddarbitreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
