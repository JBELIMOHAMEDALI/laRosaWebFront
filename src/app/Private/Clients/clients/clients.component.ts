import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AtherSService } from 'src/app/service/ather-s.service';
import { SharedService } from 'src/app/service/shared.service';
import { PoupUpAddUpdateClientComponent } from '../poup-up-add-update-client/poup-up-add-update-client.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
listCli:any[]=[]
p:number=1;
id_regition:any;
term: any;
  constructor(public sahredserv:SharedService,private modalService: NgbModal,private atherserv:AtherSService) { }
  ngOnInit(): void {
    this.getlistCli();
  }
  async getlistCli() {
    await this.sahredserv.getAllArticle("client").subscribe({
      next: (data) => {
        const donne: any = data;
          this.listCli = donne;
      }, error: (err) => {
        this.listCli = [];
      }
    })
  }

  openADD()
  {
    const modalRef = this.modalService.open(PoupUpAddUpdateClientComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.add = true;
    modalRef.componentInstance.titre = "Ajouter Client";
    // this.sahredserv.reloadComponent()
  }
  openUpdate(item:any)
  {
    this.atherserv.getIdRegion(item.region,item.zone).subscribe({
      next: (data) => {
        const donne: any = data;
        const modalRef = this.modalService.open(PoupUpAddUpdateClientComponent, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.add = false;
        modalRef.componentInstance.titre = "Modifier Client";
        modalRef.componentInstance.item = item;
        modalRef.componentInstance.id_reg = donne.id_reg;
        modalRef.componentInstance.id_zone = donne.id_zon;
        //
      }, error: (err) => {
        const modalRef = this.modalService.open(PoupUpAddUpdateClientComponent, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.add = false;
        modalRef.componentInstance.titre = "Modifier Client";
        modalRef.componentInstance.item = item;
        modalRef.componentInstance.id_reg = '';
        this.id_regition = "";
        modalRef.componentInstance.id_zone = '';

      }
    })


  }





}
