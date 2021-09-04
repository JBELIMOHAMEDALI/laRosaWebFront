import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/service/shared.service';
import { AddUpdateZoneComponent } from '../poup_up_t/add-update-zone/add-update-zone.component';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {

  listzone:any[]=[];
p:number=1;
term: any;
  constructor(public sahredserv:SharedService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getlistReg();
  }
  async getlistReg() {
    await this.sahredserv.getAllArticle("zone").subscribe({
      next: (data) => {
        const donne: any = data;
          this.listzone = donne;
          console.log(data);

      }, error: (err) => {
        this.listzone = [];
      }
    })
  }
  openADD()
  {
    const modalRef = this.modalService.open(AddUpdateZoneComponent);
    modalRef.componentInstance.add = true;
    modalRef.componentInstance.titre = "Ajouter Zone";
    // this.sahredserv.reloadComponent()
  }

}
