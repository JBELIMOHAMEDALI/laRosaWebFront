import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/service/shared.service';
import { AddUpdateBesComponent } from '../poupUp/add-update-bes/add-update-bes.component';

@Component({
  selector: 'app-bss',
  templateUrl: './bss.component.html',
  styleUrls: ['./bss.component.css']
})
export class BSSComponent implements OnInit {
  listBss: any[] = [];
  p:number=1;
  term: any;
  constructor(public sahredserv:SharedService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getListBes();
  }



  async getListBes() {
    await this.sahredserv.getAllArticle("bs").subscribe({
      next: (data) => {
        const donne: any = data;
          this.listBss = donne;
          console.log(data);

      }, error: (err) => {
        this.listBss = [];
      }
    })
  }
  openADD()
  {
    const modalRef = this.modalService.open(AddUpdateBesComponent);
    modalRef.componentInstance.add = true;
    modalRef.componentInstance.titre = "Ajouter d'une Bons de sortie ";
    // this.sahredserv.reloadComponent()
    modalRef.componentInstance.nomControler = 'bs';

  }

  openUpdate(item:any)
  {
    const modalRef = this.modalService.open(AddUpdateBesComponent,);
    modalRef.componentInstance.add = false;
    modalRef.componentInstance.titre = "Modifier d'une Bons de sortie";
    modalRef.componentInstance.item = item;
    modalRef.componentInstance.nomControler = 'bs';
  }
}
