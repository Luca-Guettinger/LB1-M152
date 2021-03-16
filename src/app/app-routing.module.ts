import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InstallationGuideComponent} from './installation-guide/installation-guide.component';
import {HomeComponent} from './home/home.component';
import {GuettingerComponent} from './guettinger/guettinger.component';
import {AudioComponent} from './audio/audio.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AnimationenComponent} from './animationen/animationen.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'installation', component: InstallationGuideComponent},
  {path: 'video', component: AudioComponent},
  {path: 'animations', component: AnimationenComponent},
  {path: 'about', component: AboutComponent},
  {path: 'me', component: GuettingerComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
