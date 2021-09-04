import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AtherSService } from 'src/app/service/ather-s.service';
import { SharedService } from 'src/app/service/shared.service';
import * as XLSX from 'xlsx';
import { AddBeBsDetaileComponent } from '../poupUp/add-be-bs-detaile/add-be-bs-detaile.component';
import { AddUpdateBesComponent } from '../poupUp/add-update-bes/add-update-bes.component';

@Component({
  selector: 'app-be',
  templateUrl: './be.component.html',
  styleUrls: ['./be.component.css']
})
export class BEComponent implements OnInit {
  listDetailebe:any[]=[]
  p:number=1;
  term: any;
  fileName= 'Bondentree.xlsx';
  active_id:string=""
  objectInfo:any;
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
//
constructor(public sahredserv:SharedService,private route: ActivatedRoute,private modalService: NgbModal,private atherserv:AtherSService) {
     //
     const id: any = this.route.snapshot.paramMap.get('id_be')?.toString();
     this.active_id=id;
}

  ngOnInit(): void {
    this.getlistDetaileBe();
    this.getInfo();
  }
  async getlistDetaileBe() {
    await this.sahredserv.getDetaileBeBs("docbe1",this.active_id).subscribe({
      next: (data) => {
        const donne: any = data;
          this.listDetailebe = donne;
      }, error: (err) => {
        this.listDetailebe = [];
      }
    })
  }
  async getInfo() {
    await this.atherserv.getInfoAgontByBe(this.active_id).subscribe({
      next: (data) => {
        const donne: any = data;
          this.objectInfo = donne;
         // alert(JSON.stringify(this.objectInfo))
      }, error: (err) => {
        this.objectInfo = [];
      }
    })
  }

  openADD()
  {
    const modalRef = this.modalService.open(AddBeBsDetaileComponent/*, { size: 'lg', backdrop: 'static' }*/);
    modalRef.componentInstance.add = true;
    modalRef.componentInstance.titre = "Détails Du Bon D'entrée";
    modalRef.componentInstance.id = this.active_id;// 'docbe1'nomTab
    modalRef.componentInstance.nomTab = "docbe1";// ''
    // this.sahredserv.reloadComponent()
  }

  openUpdate()
  {
    const obj={date:this.objectInfo.date,recouvreur:this.objectInfo.recouvreur}
    const modalRef = this.modalService.open(AddUpdateBesComponent,);
    modalRef.componentInstance.add = false;
    modalRef.componentInstance.titre = "Modifier d'une Bons d'entrée";
    modalRef.componentInstance.item = obj;
    modalRef.componentInstance.nomControler = 'be';
  }
}
