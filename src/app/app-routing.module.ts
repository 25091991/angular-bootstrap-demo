import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResearchComponent } from './body/research/research.component';
import { PublicationsComponent } from './body/publications/publications.component';
import { NewsComponent } from './body/news/news.component';
import { BioComponent } from './body/bio/bio.component';
import { MembersComponent } from './body/members/members.component';
import { ContactComponent } from './body/contact/contact.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'biography', component: BioComponent },
  { path: 'members', component: MembersComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
