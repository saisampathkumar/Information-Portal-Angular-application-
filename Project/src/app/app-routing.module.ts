
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AssessmentComponent } from './assessment/assessment/assessment.component';
import { VideoComponent } from './video/video/video.component';
import { SignUpComponent } from './accounts/sign-up/sign-up.component';
import { FlashCardComponent } from './flash-cards/flash-card/flash-card.component';
import { AuthGuardService } from './accounts/services/auth-guard.service';
import { AlreadyAuthService } from './accounts/services/already-auth.service';
import { LoginComponent } from './accounts/login/login.component';
import { AddcardComponent } from './flash-cards/addcard/addcard.component';
import { FlashCardlistComponent } from './flash-cards/flash-cardlist/flash-cardlist.component';
import { AssessmentFormComponent } from './assessment/assessment-form/assessment-form.component';
import { NewAssessmentComponent } from './assessment/new-assessment/new-assessment.component';
import { VideoDisplayComponent } from './video/video-display/video-display.component';
import { NewQuestionComponent } from './assessment/new-question/new-question.component';
import { AngularComponent } from './flash-cards/angular/angular.component';



const routes: Routes = [
  { path: "", redirectTo: 'logIn', pathMatch: 'full', canActivate: [AlreadyAuthService] },
  { path: "account", component: HomeComponent, canActivate: [AuthGuardService], data: { state: 'home' } },
  { path: 'logIn', component: LoginComponent, canActivate: [AlreadyAuthService], data: { state: 'login' } },
  { path: 'signUp', component: SignUpComponent, canActivate: [AlreadyAuthService], data: { state: 'signup' } },
  { path: 'crdlist/:id', component: FlashCardlistComponent, data: { state: 'cardlist' } },
  { path: 'card/cards', component: FlashCardlistComponent },
  { path: 'card/:topic', component: AngularComponent },
  { path: 'card/Angular', component: AngularComponent },
  { path: 'card/JavaScript', component: AngularComponent },
  { path: 'card/NodeJS', component: AngularComponent },
  {
    path: 'articles',
    loadChildren: () =>
      import('./articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: 'relatedlinks',
    loadChildren: () =>
      import('./related-links/related-links.module').then(m => m.RelatedLinksModule)
  },
  { path: 'assessment', component: AssessmentComponent, data: { state: 'assessment' } },
  { path: 'course', component: AssessmentFormComponent },
  { path: 'addcard', component: AddcardComponent },
  { path: 'card', component: FlashCardComponent, data: { state: 'card' } },
  { path: 'video', component: VideoComponent, data: { state: 'video' } },
  { path: 'videoList', component: VideoDisplayComponent },
  { path: 'newAssessment', component: NewAssessmentComponent },
  { path: 'newQuestion', component: NewQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
