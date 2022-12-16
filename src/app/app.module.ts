import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { UserService } from './services/user.service';
import { UserPostsService } from './services/user-posts.service';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    ExponentialStrengthPipe,
    UserPostsComponent,
    AddPostsComponent,
    DashboardComponent,
    PostComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    UserPostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
