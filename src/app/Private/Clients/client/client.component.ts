import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AtherSService } from 'src/app/service/ather-s.service';
import { SharedService } from 'src/app/service/shared.service';
import { PoupUpAddUpdateClientComponent } from '../poup-up-add-update-client/poup-up-add-update-client.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
active_id:string="";
infoCli:any={};
  constructor(private modalService: NgbModal,private route: ActivatedRoute,private atherSer:AtherSService,public  sahredserv:SharedService,private router:Router) {
   //private route: ActivatedRoute
    const id: any = this.route.snapshot.paramMap.get('id_cl')?.toString();
    this.active_id=id;
  }

  ngOnInit(): void {
    this.getInfo();
  }
async getInfo()
{
  await this.atherSer.getInfoCli(this.active_id).subscribe({next:(data)=>{
    const donne:any=data;
    const obj =     {
      id: donne[0]['id'],
      cin: donne[0]['cin'],
      nom: donne[0]['nom'],
      greeting:donne[0]['greeting'],
      phone:donne[0]['phone'] ,
      phone2:donne[0]['2phone'],
      adresse: donne[0]['adresse'],
      zone: donne[0]['zone'],
      region:donne[0]['region'] ,
      solvale:donne[0]['solvale']
      }
      this.infoCli=obj;
  //  console.log(obj);
  },error:(err)=>{
    this.infoCli={};
  }})

}

openUpdate()
{
  this.atherSer.getIdRegion(this.infoCli.region,this.infoCli.zone).subscribe({
    next: (data) => {
      const donne: any = data;
      const modalRef = this.modalService.open(PoupUpAddUpdateClientComponent, { size: 'lg', backdrop: 'static' });
      modalRef.componentInstance.add = false;
      modalRef.componentInstance.titre = "Modifier Client";
      modalRef.componentInstance.item = this.infoCli;
      modalRef.componentInstance.id_reg = donne.id_reg;
      modalRef.componentInstance.id_zone = donne.id_zon;
      //
    }, error: (err) => {
      const modalRef = this.modalService.open(PoupUpAddUpdateClientComponent, { size: 'lg', backdrop: 'static' });
      modalRef.componentInstance.add = false;
      modalRef.componentInstance.titre = "Modifier Client";
      modalRef.componentInstance.item = this.infoCli;
      modalRef.componentInstance.id_reg = '';
      // this.id_regition = "";
      modalRef.componentInstance.id_zone = '';

    }
  })
}


}
