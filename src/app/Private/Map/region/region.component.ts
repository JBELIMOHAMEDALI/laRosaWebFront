import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/service/shared.service';
import { AddUpdateRegionComponent } from '../poup_up_t/add-update-region/add-update-region.component';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
listReg:any[]=[];
p:number=1;
term: any;
  constructor(public sahredserv:SharedService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getlistReg();
  }
  async getlistReg() {
    await this.sahredserv.getAllArticle("region").subscribe({
      next: (data) => {
        const donne: any = data;
          this.listReg = donne;
          console.log(data);

      }, error: (err) => {
        this.listReg = [];
      }
    })
  }
  openADD()
  {
    const modalRef = this.modalService.open(AddUpdateRegionComponent);
    modalRef.componentInstance.add = true;
    modalRef.componentInstance.titre = "Ajouter Region";
    // this.sahredserv.reloadComponent()
  }
  //
}
