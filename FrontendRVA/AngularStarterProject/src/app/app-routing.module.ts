import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/core/about/about.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HomeComponent } from './components/core/home/home.component';
import { LigaComponent } from './components/liga/liga.component';
import { NacionalnostComponent } from './components/nacionalnost/nacionalnost.component';
import { TimComponent } from './components/tim/tim.component';


const routes: Routes = [
  { path: 'liga', component: LigaComponent },
  { path: 'nacionalnost', component: NacionalnostComponent },
  { path: 'tim', component: TimComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'author', component: AuthorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
