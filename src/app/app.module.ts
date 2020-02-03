import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { HomeComponent } from "./home/components/home/home.component";
import { MatListModule } from "@angular/material/list";
import { LogoComponent } from './home/components/logo/logo.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { IntroSectionComponent } from './home/components/intro-section/intro-section.component';
import { ProjectsSectionComponent } from './home/components/projects-section/projects-section.component';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { GithubRepoComponent } from './home/components/github-repo/github-repo.component';
import { GithubRepoDetailComponent } from './home/components/github-repo-detail/github-repo-detail.component';
import { LanguageComponent } from './home/components/language/language.component';
import { BlogComponent } from './blog/components/blog/blog.component';
import { BlogsComponent } from './blog/components/blogs/blogs.component';
import { MarkdownComponent } from './core/components/markdown/markdown.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LogoComponent,
    IntroSectionComponent,
    ProjectsSectionComponent,
    GithubRepoComponent,
    GithubRepoDetailComponent,
    LanguageComponent,
    BlogComponent,
    BlogsComponent,
    MarkdownComponent
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
