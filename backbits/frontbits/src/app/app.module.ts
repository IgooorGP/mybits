import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { FooterComponent } from './footer/footer.component';
import { AskTheBotComponent } from './main-display/ask-the-bot/ask-the-bot.component';
import { AboutMeComponent } from './main-display/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MainDisplayComponent,
    FooterComponent,
    AskTheBotComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
