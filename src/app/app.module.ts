import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { TrustComponent } from './trust/trust.component';
import { FeaturesComponent } from './features/features.component';
import { JackpotComponent } from './jackpot/jackpot.component';
import { IntegrationComponent } from './integration/integration.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    TrustComponent,
    FeaturesComponent,
    JackpotComponent,
    IntegrationComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
