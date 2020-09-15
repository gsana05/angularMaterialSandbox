import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { BarchartsComponent } from './barcharts/barcharts.component';
import { ListsComponent } from './lists/lists.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path: 'signup', component:SignupComponent},
  {path: 'barcharts', component:BarchartsComponent},
  {path: 'lists', component:ListsComponent},
  {path: 'quiz', component:QuizComponent},
  { path: '**', redirectTo: '/quiz' }, //goes to this page by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
