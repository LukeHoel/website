import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { BlogComponent } from './blog/components/blog/blog.component';
import { BlogsComponent } from './blog/components/blogs/blogs.component';

const routes: Routes = [
  { path: 'blog/:id', component: BlogComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
