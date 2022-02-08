import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ResearchComponent } from './body/research/research.component';
import { PublicationsComponent } from './body/publications/publications.component';
import { NewsComponent } from './body/news/news.component';
import { BioComponent } from './body/bio/bio.component';
import { MembersComponent } from './body/members/members.component';
import { ContactComponent } from './body/contact/contact.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ResearchComponent,
    PublicationsComponent,
    NewsComponent,
    BioComponent,
    MembersComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
