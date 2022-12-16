import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
const routes: Routes = [
 {
  path:'', component:DashboardComponent
 },
 {
  path:'users', component:UsersComponent
 },
 {
  path:'posts', component:UserPostsComponent
 },
 {
  path:'post/:id', component:PostComponent
 },
 {
  path:"**", component:NotFoundComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
