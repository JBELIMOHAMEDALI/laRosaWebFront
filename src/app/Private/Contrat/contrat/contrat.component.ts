import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AtherSService } from 'src/app/service/ather-s.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {
  active_id:string=""
  listPaymentContras:[]=[]
  p:number=1;
  term: any;
  objectInfo:any;
  id_contra:string=""
  constructor(public sahredserv:SharedService,private route: ActivatedRoute,private modalService: NgbModal,private atherserv:AtherSService) {
    const id: any = this.route.snapshot.paramMap.get('num_contrat')?.toString();
    this.active_id=id;

}

  ngOnInit(): void {
    this.getListContra();
    this.getInfoContra();
  }
  async getListContra() {
    await this.atherserv.getInfoContraPayment(this.active_id).subscribe({
      next: (data) => {
        const donne: any = data;
          this.listPaymentContras = donne;
      }, error: (err) => {
        this.listPaymentContras = [];
      }
    })
  }//
  async getInfoContra() {
    await this.atherserv.getContratInfo(this.active_id).subscribe({
      next: (data) => {
        const donne: any = data;
          this.objectInfo = donne;
          console.log(data);

      }, error: (err) => {
        this.objectInfo = [];
      }
    })
  }
  // async getContraBayNumero() {
  //   await this.atherserv.getContraBayNumero(this.active_id).subscribe({
  //     next: (data) => {
  //       const donne: any = data;
  //         this.listPaymentContras = donne;
  //     }, error: (err) => {
  //       this.listPaymentContras = [];
  //     }
  //   })
  // }//

}
