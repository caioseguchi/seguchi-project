import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { TaskComponent } from './pages/task/task.component';
import { ContactPostComponent } from './pages/contact-post/contact-post.component';
import { ContactGetAllComponent } from './pages/contact-get-all/contact-get-all.component';

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
    path: 'task',
    component: TaskComponent,
  },
  {
    path: 'contact',
    component: ContactPostComponent,
  },
  {
    path: 'contacts',
    component: ContactGetAllComponent,
  },
];
