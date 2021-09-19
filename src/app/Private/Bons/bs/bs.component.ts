import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AtherSService } from 'src/app/service/ather-s.service';
import { SharedService } from 'src/app/service/shared.service';
import * as XLSX from 'xlsx';
import { AddBeBsDetaileComponent } from '../poupUp/add-be-bs-detaile/add-be-bs-detaile.component';
import { AddUpdateBesComponent } from '../poupUp/add-update-bes/add-update-bes.component';

@Component({
  selector: 'app-bs',
  templateUrl: './bs.component.html',
  styleUrls: ['./bs.component.css']
})
export class BSComponent implements OnInit {
  listDetailebs:any[]=[]
  p:number=1;
  term: any;
  active_id:string=""
  objectInfo:any;
  fileName= 'Bondesorite.xlsx';

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

  constructor(public sahredserv:SharedService,private route: ActivatedRoute,private modalService: NgbModal,private atherserv:AtherSService) {
    //
    const id: any = this.route.snapshot.paramMap.get('id_bs')?.toString();
    this.active_id=id;
}

  ngOnInit(): void {
    this.getInfo()
    this.getlistDetaileBs();
  }
  async getlistDetaileBs() {
    await this.sahredserv.getDetaileBeBs("docbs1",this.active_id).subscribe({
      next: (data) => {
        const donne: any = data;
          this.listDetailebs = donne;
      }, error: (err) => {
        this.listDetailebs = [];
      }
    })
  }


  async getInfo() {
    await this.atherserv.getInfoAgontByBs(this.active_id).subscribe({
      next: (data) => {
        const donne: any = data;
          this.objectInfo = donne;
      }, error: (err) => {
        this.objectInfo = [];
      }
    })
  }

  openADD()
  {
    const modalRef = this.modalService.open(AddBeBsDetaileComponent/*, { size: 'lg', backdrop: 'static' }*/);
    modalRef.componentInstance.add = true;
    modalRef.componentInstance.titre = "Détails Du Bon sortie";
    modalRef.componentInstance.id = this.active_id;
    modalRef.componentInstance.nomControler = this.active_id;
    modalRef.componentInstance.nomTab = "docbs1";// ''

    // this.sahredserv.reloadComponent()
  }

  openUpdate()
  {
    const obj={date:this.objectInfo.date,recouvreur:this.objectInfo.recouvreur}
    const modalRef = this.modalService.open(AddUpdateBesComponent,);
    modalRef.componentInstance.add = false;
    modalRef.componentInstance.titre = "Modifier d'une Bons sortie";
    modalRef.componentInstance.item = obj;
    modalRef.componentInstance.nomControler = 'bs';
  }

  openUpdate2(item:any)
  {

    this.atherserv.getIdRegion(item.Region,item.Zone).subscribe({
      next: (data) => {
        const donne: any = data;
        const modalRef = this.modalService.open(AddBeBsDetaileComponent);
        modalRef.componentInstance.add = false;
        modalRef.componentInstance.titre = " Modifier Détails Du Bon sortie";
        modalRef.componentInstance.id = this.active_id;// 'docbe1'nomTab
        modalRef.componentInstance.nomTab = "docbs1";// ''
        modalRef.componentInstance.item = item
        modalRef.componentInstance.id_reg = donne.id_reg;
        modalRef.componentInstance.id_zone = donne.id_zon;
      }, error: (err) => {
      }
    })

  }

}
