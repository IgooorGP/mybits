import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { FooterComponent } from './footer/footer.component';
import { AskTheBotComponent } from './main-display/ask-the-bot/ask-the-bot.component';
import { AboutMeComponent } from './main-display/about-me/about-me.component';
import { Routes, RouterModule } from "@angular/router";
import { ProjectsComponent } from './main-display/projects/projects.component';
import { SkillsComponent } from './main-display/skills/skills.component';

const appRoutes: Routes = [
  { path: '', component: AskTheBotComponent },  // HomeComponent (empty path ~root)
  { path: 'about', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MainDisplayComponent,
    FooterComponent,
    AskTheBotComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
