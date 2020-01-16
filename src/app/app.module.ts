import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { HomeComponent } from "./components/home/home.component";
import { MatListModule } from "@angular/material/list";
import { ProjectsComponent } from './components/projects/projects.component';
import { LogoComponent } from './components/home/logo/logo.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { IntroSectionComponent } from './components/home/intro-section/intro-section.component';
import { ProjectsSectionComponent } from './components/home/projects-section/projects-section.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { GithubRepoComponent } from './components/github-repo/github-repo.component';
import { GithubRepoDetailComponent } from './components/github-repo-detail/github-repo-detail.component';
import { LanguageComponent } from './components/language/language.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    HomeComponent,
    ProjectsComponent,
    LogoComponent,
    IntroSectionComponent,
    ProjectsSectionComponent,
    TimelineComponent,
    GithubRepoComponent,
    GithubRepoDetailComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatRippleModule,
    MatTooltipModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
