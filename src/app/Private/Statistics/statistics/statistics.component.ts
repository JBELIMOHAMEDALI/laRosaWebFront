import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AtherSService } from 'src/app/service/ather-s.service';
import { SharedService } from 'src/app/service/shared.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  fileName= 'Statistiques.xlsx';
ok=false;
listData:any[]=[];
listArt:any[]=[];
listRecouvreur:any[]=[];//
listChefGroupe:any[]=[];//
listVendeurCommercial:any[]=[];//
listClient:any[]=[];//
listRegion:any[]=[];//
listZone:any[]=[];//
model:any={}
nbrContra:any=0;
Total:any=0;
Recu:any=0;
APayer:any=0;
p:number=1;
regition: string = ""
ok2:any=false;

  exportexcel(): void
  {
     /* table id is passed over here */
     let element = document.getElementById('excel-table');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName);

  }

  constructor(public sahredserv:SharedService,private modalService: NgbModal,private atherserv:AtherSService) { }

  ngOnInit(): void {

    this.getNbrContra() ; this.getTotal() ;this.getRecu(); this.getAPayer();this.getlistArt()
  this.getListAgontRecouvreur();this.getListAgontChefGroupe();this.getListAgontVendeurCommercial();this.getlistCli()
this.getlistRgion();
}
  async getNbrContra() {
    await this.sahredserv.getAllBayEndPoint("other","statContrat").subscribe({
      next: (data) => {
        const donne: any = data;
          this.nbrContra = donne.contracts;
      }, error: (err) => {
        this.nbrContra = 0;
      }
    })
  }

  async getTotal() {
    await this.sahredserv.getAllBayEndPoint("other","statTotal").subscribe({
      next: (data) => {
        const donne: any = data;
          this.Total = donne.total;
      }, error: (err) => {
        this.Total = 0;
      }
    })
  }

  async getRecu() {
    await this.sahredserv.getAllBayEndPoint("other","statRecu").subscribe({
      next: (data) => {
        const donne: any = data;
          this.Recu = donne.recu;
      }, error: (err) => {
        this.Recu = 0;
      }
    })
  }

  async getAPayer() {
    await this.sahredserv.getAllBayEndPoint("other","stat-A-Paye").subscribe({
      next: (data) => {
        const donne: any = data;
          this.APayer = donne.aPaye;
      }, error: (err) => {
        this.APayer = 0;
      }
    })
  }
  async getlistArt() {
    await this.sahredserv.getAllArticle("article").subscribe({
      next: (data) => {
        const donne: any = data;
        this.listArt = donne;
      }, error: (err) => {
        this.listArt = [];
      }
    })
  }
  async getListAgontRecouvreur() {
    await this.atherserv.getAgontByType("Recouvreur").subscribe({
      next: (data) => {
        const donne: any = data;
        this.listRecouvreur = donne;
      }, error: (err) => {
        this.listRecouvreur = [];
      }
    })
  }

  async getListAgontChefGroupe() {
    await this.atherserv.getAgontByType("Chef de groupe").subscribe({
      next: (data) => {
        const donne: any = data;
        this.listChefGroupe = donne;

      }, error: (err) => {
        this.listChefGroupe = [];
      }
    })
  }
  async getListAgontVendeurCommercial() {

    await this.atherserv.getAgontByType("Vendeur Commercial").subscribe({
      next: (data) => {
        const donne: any = data;
        this.listVendeurCommercial = donne;

      }, error: (err) => {
        this.listVendeurCommercial = [];
      }
    })
  }
  async getlistCli() {
    await this.sahredserv.getAllForList().subscribe({
      next: (data) => {
        const donne: any = data;
        this.listClient = donne;
      }, error: (err) => {
        this.listClient = [];
      }
    })
  }
  async getListZone(id: string) {
    await this.atherserv.getZoneBayRegion(id).subscribe({
      next: (data) => {
        const donne: any = data;
        this.listZone = donne;
      }, error: (err) => {
        this.listZone = [];
      }
    })
  }
  getRegion(event: any) {
    this.regition = event.target.options[event.target.options.selectedIndex].text;
    this.getListZone(event.target.value);
  }
  async getlistRgion() {

    await this.sahredserv.getAllArticle("region").subscribe({

      next: (data) => {
        const donne: any = data;
        this.listRegion = donne;
      }, error: (err) => {
        this.listRegion = [];
      }
    })
  }
  mangerForm(f:NgForm){
    console.log(f.value);
let article =""
let chef =""
let client =""
let commission_vendeur =""
let recouvreur =""
let statucontrat =""
let zone =""

if(this.model.article!=undefined){article=this.model.article["nom"]}
if(this.model.chef!=undefined){chef=this.model.chef["nom"]}
if(this.model.client!=undefined){client=this.model.client["nom"]}
if(this.model.commission_vendeur!=undefined){commission_vendeur=this.model.commission_vendeur["nom"]}
if(this.model.recouvreur!=undefined){recouvreur=this.model.recouvreur["nom"]}
if(this.model.statucontrat!=undefined){statucontrat=this.model.statucontrat}
if(this.model.zone!=undefined){zone=this.model.zone}
    this.ok2=true;
  const obj = {article:article,chef:chef,client:client,comm:commission_vendeur,recouvreur:recouvreur,status:statucontrat,zone:zone,region:this.regition,montant: null}
this.atherserv.getStatContrat(obj).subscribe({
  next: (data) => {
    const donne: any = data;
    this.listData = donne;
    this.ok2=false;
    this.ok=true;
    console.log(donne);
  }, error: (err) => {
    this.listData = [];
    this.ok2=false

  }
})

  }
}
