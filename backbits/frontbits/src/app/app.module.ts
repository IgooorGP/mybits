import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { FooterComponent } from './footer/footer.component';
import { AskTheBotComponent } from './main-display/ask-the-bot/ask-the-bot.component';
import { AboutMeComponent } from './main-display/about-me/about-me.component';
import { Routes, RouterModule } from "@angular/router";
import { ProjectsComponent } from './main-display/projects/projects.component';
import { SkillsComponent } from './main-display/skills/skills.component';
import { ContactsComponent } from './main-display/contacts/contacts.component';
import { WebSocketService } from './services/web-socket.service';

const appRoutes: Routes = [
  { path: '', component: AskTheBotComponent },  // HomeComponent (empty path ~root)
  { path: 'about', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contacts', component: ContactsComponent },
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
    ContactsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WebSocketService],  // provides the service instance
  bootstrap: [AppComponent]
})
export class AppModule { }
