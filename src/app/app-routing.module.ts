import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './Private/Articles/articles/articles.component';
import { BEComponent } from './Private/Bons/be/be.component';
import { BESComponent } from './Private/Bons/bes/bes.component';
import { BSComponent } from './Private/Bons/bs/bs.component';
import { BSSComponent } from './Private/Bons/bss/bss.component';
import { ClientComponent } from './Private/Clients/client/client.component';
import { ClientsComponent } from './Private/Clients/clients/clients.component';
import { CommercialComponent } from './Private/Commercial/commercial/commercial.component';
import { AddContratComponent } from './Private/Contrat/add-contrat/add-contrat.component';
import { ContratComponent } from './Private/Contrat/contrat/contrat.component';
import { ContratsComponent } from './Private/Contrat/contrats/contrats.component';
import { DashboardComponent } from './Private/dashboard/dashboard.component';
import { LoginComponent } from './Private/login/login.component';
import { RegionComponent } from './Private/Map/region/region.component';
import { ZoneComponent } from './Private/Map/zone/zone.component';
import { PageNotFoundComponent } from './Private/page-not-found/page-not-found.component';
import { PaymentComponent } from './Private/Payments/payment/payment.component';
import { StatisticsComponent } from './Private/Statistics/statistics/statistics.component';
import { UsersComponent } from './Private/Users/users/users.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'commercial', component: CommercialComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'client/:id_cl', component: ClientComponent },
  { path: 'contrats', component: ContratsComponent },
  { path: 'contrat/:num_contrat', component: ContratComponent },
  { path: 'users', component: UsersComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'zone', component: ZoneComponent },
  { path: 'region', component: RegionComponent },
  { path: 'bes', component: BESComponent },
  { path: 'be/:id_be', component: BEComponent },
  { path: 'bss', component: BSSComponent },
  { path: 'bs/:id_bs', component: BSComponent },//AddUpdateContratComponent
  { path: 'mangContrat/:type', component: AddContratComponent },//

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
