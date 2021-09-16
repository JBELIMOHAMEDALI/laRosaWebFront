import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AtherSService } from 'src/app/service/ather-s.service';
import { SharedService } from 'src/app/service/shared.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
ok=false
p:number=1;
active_id:string=""
objectInfo: any;
listPaymentContras:any[]=[];
  constructor(private atherserv:AtherSService,public sahredserv:SharedService,private modalService: NgbModal,) { }

  ngOnInit(): void {
  }//payment/get-payment
  async act(num:string)
{
  // alert(num)


const obj ={contrat:num}
  await this.atherserv.paymentContra(obj).subscribe({
    next: (data) => {
      const donne: any = data;
      if(donne['msg']=="done"){
        this.ok=true;
        this.getInfoContra(num);
        this.getListContra(num);
        swal('Success', 'payment', 'success');
      }else if(donne['msg']=="no payment found for this contract"){
        swal('warning', 'aucun paiement trouvé pour ce contrat', 'error')

      }
      else
      {
        swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
      }

    }, error: (err) => {
      swal('warning', 'aucun paiement trouvé pour ce contrat ou/et Quelque Chose Ne Fonctionne Pas', 'warning')

    }
  })
}

async getInfoContra(id:string) {
  await this.atherserv.getContratInfo(id).subscribe({
    next: (data) => {
      const donne: any = data;
        this.objectInfo = donne;
        console.log(donne);

    }, error: (err) => {
    }
  })
}
async getListContra(id:string) {
  await this.atherserv.getInfoContraPayment(id).subscribe({
    next: (data) => {
      const donne: any = data;
        this.listPaymentContras = donne;
    }, error: (err) => {
      this.listPaymentContras = [];
    }
  })
}

openUpdate()
{
  const obj={date:this.objectInfo.date,recouvreur:this.objectInfo.recouvreur}
  // const modalRef = this.modalService.open(UpdatePaymentPoupComponent,);
  // modalRef.componentInstance.add = false;
  // modalRef.componentInstance.titre = "Modifier d'une Bons d'entrée";
  // modalRef.componentInstance.item = obj;
  // modalRef.componentInstance.nomControler = 'be';
}
}
