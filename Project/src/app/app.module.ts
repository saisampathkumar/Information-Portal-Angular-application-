import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { ArticlesModule } from "./articles/articles.module";
import { HomeComponent } from './home/home.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { AccountsModule } from "./accounts/accounts.module";
import { FlashCardsModule } from "./flash-cards/flash-cards.module";
import { AssessmentModule } from './assessment/assessment.module';
import { VideoModule } from './video/video.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AccountsService } from './accounts/services/accounts.service';
import { AuthGuardService } from './accounts/services/auth-guard.service';
import { AlreadyAuthService } from './accounts/services/already-auth.service';




@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ArticlesModule,
    AccountsModule,
    FlashCardsModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      loader: HttpClient, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
    ReactiveFormsModule,
    AssessmentModule,
    VideoModule
  ],
  providers: [AccountsService, AuthGuardService, AlreadyAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
