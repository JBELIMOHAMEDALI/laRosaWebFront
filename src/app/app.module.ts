import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Private/login/login.component';
import { DashboardComponent } from './Private/dashboard/dashboard.component';
import { HeaderComponent } from './Private/header/header.component';
import { FooterComponent } from './Private/footer/footer.component';
import { NavComponent } from './Private/nav/nav.component';
import { ArticlesComponent } from './Private/Articles/articles/articles.component';
import { UsersComponent } from './Private/Users/users/users.component';
import { CommercialComponent } from './Private/Commercial/commercial/commercial.component';
import { ClientsComponent } from './Private/Clients/clients/clients.component';
import { ContratsComponent } from './Private/Contrat/contrats/contrats.component';
import { ContratComponent } from './Private/Contrat/contrat/contrat.component';
import { ClientComponent } from './Private/Clients/client/client.component';
import { PaymentComponent } from './Private/Payments/payment/payment.component';
import { StatisticsComponent } from './Private/Statistics/statistics/statistics.component';
import { ZoneComponent } from './Private/Map/zone/zone.component';
import { RegionComponent } from './Private/Map/region/region.component';
import { BESComponent } from './Private/Bons/bes/bes.component';
import { BEComponent } from './Private/Bons/be/be.component';
import { BSSComponent } from './Private/Bons/bss/bss.component';
import { BSComponent } from './Private/Bons/bs/bs.component';
import { PageNotFoundComponent } from './Private/page-not-found/page-not-found.component';
import { PoupAddUpdateArticlesComponent } from './Private/Articles/poup-add-update-articles/poup-add-update-articles.component';
import { PoupUpDeleteAllComponent } from './Private/poup-up-delete-all/poup-up-delete-all.component';
import { ModalModule } from 'ngb-modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddUpdateCommercialComponent } from './Private/Commercial/add-update-commercial/add-update-commercial.component';
import { PoupUpAddUpdateClientComponent } from './Private/Clients/poup-up-add-update-client/poup-up-add-update-client.component';
import { TestPoupupComponent } from './test-poupup/test-poupup.component';
import { AddUpdateZoneComponent } from './Private/Map/poup_up_t/add-update-zone/add-update-zone.component';
import { AddUpdateRegionComponent } from './Private/Map/poup_up_t/add-update-region/add-update-region.component';
import { AddUpdateUserComponent } from './Private/Users/add-update-user/add-update-user.component';
import { AddUpdateBesComponent } from './Private/Bons/poupUp/add-update-bes/add-update-bes.component';
import { DatePipe } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgSelectConfig } from '@ng-select/ng-select';
import { AddContratComponent } from './Private/Contrat/add-contrat/add-contrat.component';
import { UpdateContratComponent } from './Private/Contrat/update-contrat/update-contrat.component';
import { AddBeBsDetaileComponent } from './Private/Bons/poupUp/add-be-bs-detaile/add-be-bs-detaile.component';
import { UpdatePaymentPoupComponent } from './private/payments/update-payment-poup/update-payment-poup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ArticlesComponent,
    UsersComponent,
    CommercialComponent,
    ClientsComponent,
    ContratsComponent,
    ContratComponent,
    ClientComponent,
    PaymentComponent,
    StatisticsComponent,
    ZoneComponent,
    RegionComponent,
    BESComponent,
    BEComponent,
    BSSComponent,
    BSComponent,
    PageNotFoundComponent,
    PoupAddUpdateArticlesComponent,
    PoupUpDeleteAllComponent,
    AddUpdateCommercialComponent,
    PoupUpAddUpdateClientComponent,
    TestPoupupComponent,
    AddUpdateZoneComponent,
    AddUpdateRegionComponent,
    AddUpdateUserComponent,
    AddUpdateBesComponent,
    AddContratComponent,
    UpdateContratComponent,
    AddBeBsDetaileComponent,
    UpdatePaymentPoupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgSelectModule
  ],
  providers: [DatePipe,NgSelectConfig],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
