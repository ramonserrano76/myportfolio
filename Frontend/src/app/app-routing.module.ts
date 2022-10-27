import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth/guards/auth.guard';
import { SignInComponent } from '@auth/sign-in/sign-in.component';
import { HomeComponent } from '@home/home.component';


  // { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: 'home', component: HomeComponent, pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: SignInComponent },
  // { path: 'nuevaexp', component: NewExperienciaComponent },
  // { path: 'editexp/:id', component: EditExperienciaComponent },
  // { path: 'nuevaedu', component: NeweducacionComponent },
  // { path: 'editedu/:id', component: EditeducacionComponent },
  // { path: 'newskill', component: NewSkillComponent },
  // { path: 'editskill/:id', component: EditSkillComponent }
  {
    path: 'sign-in', loadChildren: () => import('./pages/auth/sign-in/sign-in.module').then(m => m.SignInModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'sign-up', loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'profile', redirectTo: 'profile.html', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
