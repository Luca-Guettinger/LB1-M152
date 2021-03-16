import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstallationGuideComponent } from './installation-guide/installation-guide.component';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { GuettingerComponent } from './guettinger/guettinger.component';
import { AudioComponent } from './audio/audio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AnimationenComponent } from './animationen/animationen.component';
import { AboutComponent } from './about/about.component';
import { SvgAnimationsComponent } from './svg-animations/svg-animations.component';

@NgModule({
  declarations: [
    AppComponent,
    InstallationGuideComponent,
    HomeComponent,
    HeaderComponent,
    GuettingerComponent,
    AudioComponent,
    NotFoundComponent,
    AnimationenComponent,
    AboutComponent,
    SvgAnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
