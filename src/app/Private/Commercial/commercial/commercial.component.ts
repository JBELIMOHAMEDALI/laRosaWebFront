import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/service/shared.service';
import { PoupUpDeleteAllComponent } from '../../poup-up-delete-all/poup-up-delete-all.component';
import { AddUpdateCommercialComponent } from '../add-update-commercial/add-update-commercial.component';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {
listCommirciale:any[]=[];
p:number=1;
term: any;

  constructor(public sahredserv:SharedService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getlistCom();
  }


  async getlistCom() {
    await this.sahredserv.getAllArticle("agent").subscribe({
      next: (data) => {
        const donne: any = data;
          this.listCommirciale = donne;
      }, error: (err) => {
        this.listCommirciale = [];
      }
    })
  }
  openADD()
  {
    const modalRef = this.modalService.open(AddUpdateCommercialComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.add = true;
    modalRef.componentInstance.titre = "Ajouter Commercial";
    // this.sahredserv.reloadComponent()
  }
  openUpdate(item:any)
  {
    const modalRef = this.modalService.open(AddUpdateCommercialComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.add = false;
    modalRef.componentInstance.titre = "Modifier Commercial";
    modalRef.componentInstance.item = item;
  }
}
