import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import { DashBoardComponent } from './templates/dashboard/dashboard.component';
import { HomeDashBoardComponent } from './pages/dashboard/home/homedashboard.component';
import { MainComponent } from './templates/main/main.component';
import { HomeLandingComponent } from './pages/landing/home/homelanding.component';
import { SurveybuilderComponent } from './components/surveybuilder/surveybuilder.component';

const routes: Routes = [
  { 
    path: '', 
    component: MainComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: HomeLandingComponent
      }
    ]
  },
  // { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'survey-builder', component: SurveybuilderComponent },
  {
    path: 'reach',
    component: DashBoardComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeDashBoardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}