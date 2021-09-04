import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css']
})
export class ContratsComponent implements OnInit {
  listContras: any[] = [];//listClient
  listClient: any[] = [];//listArt
  listArt: any[] = [];//
  p:number=1;
  term: any;
  constructor(public sahredserv:SharedService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getListContra();
    // this.getlistCli()//getlistArt
    // this.getlistArt()//

  }



  async getListContra() {
    await this.sahredserv.getAllArticle("contrat").subscribe({
      next: (data) => {
        const donne: any = data;
          this.listContras = donne;
      }, error: (err) => {
        this.listContras = [];
      }
    })
  }
  // openADD()
  // {
  //   const modalRef = this.modalService.open(AddUpdateContratsComponent,{ size: 'lg', backdrop: 'static' });
  //   modalRef.componentInstance.add = true;
  //   modalRef.componentInstance.titre = "Ajouter Contrats";
  //   modalRef.componentInstance.listClient = this.listClient;
  //   modalRef.componentInstance.listArt = this.listArt;
  //   // this.sahredserv.reloadComponent()

  // }
  // async getlistCli() {
  //   await this.sahredserv.getAllForList().subscribe({
  //     next: (data) => {
  //       const donne: any = data;
  //         this.listClient = donne;
  //     }, error: (err) => {
  //       this.listClient = [];
  //     }
  //   })
  // }

  // async getlistArt() {
  //   await this.sahredserv.getAllArticle("article").subscribe({
  //     next: (data) => {
  //       const donne: any = data;
  //         this.listArt = donne;
  //     }, error: (err) => {
  //       this.listArt = [];
  //     }
  //   })
  // }

  // openUpdate(item:any)
  // {
  //   const modalRef = this.modalService.open(AddUpdateContratsComponent,{ size: 'lg', backdrop: 'static' });
  //   modalRef.componentInstance.add = false;
  //   modalRef.componentInstance.titre = "Modifier Contrats";
  //   modalRef.componentInstance.item = item;
  // }
}
