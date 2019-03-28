import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Roots
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { PortafolioComponent } from './Components/Pages/portafolio/portafolio.component';
import { AboutComponent } from './Components/Pages/about/about.component';
import { PortafolioItemComponent } from './Components/Pages/portafolio-item/portafolio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortafolioItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
