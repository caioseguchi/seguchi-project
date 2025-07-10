import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ListContactsComponent } from './pages/list-contacts/list-contacts.component';
import { ListPostContactComponent } from './pages/list-post-contact/list-post-contact.component';
import { ListUpdateContactComponent } from './pages/list-update-contact/list-update-contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'list',
    component: ListContactsComponent,
  },
  {
    path: 'post-contact',
    component: ListPostContactComponent,
  },
  {
    path: 'update-contact/:contactId',
    component: ListUpdateContactComponent,
  },
];
