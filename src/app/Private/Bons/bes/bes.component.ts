import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/service/shared.service';
import { AddUpdateBesComponent } from '../poupUp/add-update-bes/add-update-bes.component';

@Component({
  selector: 'app-bes',
  templateUrl: './bes.component.html',
  styleUrls: ['./bes.component.css']
})
export class BESComponent implements OnInit {
  listBes: any[] = [];
  p:number=1;
  term: any;
  constructor(public sahredserv:SharedService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getListBes();
  }



  async getListBes() {
    await this.sahredserv.getAllArticle("be").subscribe({
      next: (data) => {
        const donne: any = data;
          this.listBes = donne;
          console.log(data);

      }, error: (err) => {
        this.listBes = [];
      }
    })
  }
  openADD()
  {
    const modalRef = this.modalService.open(AddUpdateBesComponent);
    modalRef.componentInstance.add = true;
    modalRef.componentInstance.titre = "Ajouter d'une Bons d'entrée ";
    // this.sahredserv.reloadComponent()
    modalRef.componentInstance.nomControler = 'be';

  }

  openUpdate(item:any)
  {
    const modalRef = this.modalService.open(AddUpdateBesComponent,);
    modalRef.componentInstance.add = false;
    modalRef.componentInstance.titre = "Modifier d'une Bons d'entrée";
    modalRef.componentInstance.item = item;
    modalRef.componentInstance.nomControler = 'be';
  }
}
