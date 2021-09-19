import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.css']
})
export class UpComponent implements OnInit {
  @Input() add: any;//titre
  @Input() titre: string = "";
  @Input() item: any;
  @Input() ok: boolean=true;
  model: any = {};
  constructor(public activeModal: NgbActiveModal,private shared:SharedService,private router: Router,) { }


  ngOnInit(): void {
    let strDate:string = this.item.dp.toString();
let daye= strDate.slice(0,strDate.indexOf("-"))
let month =strDate.slice(strDate.indexOf("-")+1,strDate.indexOf("-", (strDate.indexOf("-") + 1)))
let year =strDate.slice(strDate.indexOf("-", (strDate.indexOf("-") +1))+1,strDate.length)
if(month.length==1){month="0"+month}
let newdate=year+"-"+month+"-"+daye+""
this.model.Mensualite=this.item.Mensualite;
this.model.PaiedAmmount=this.item.PaiedAmmount || 0;
this.model.Reste=this.item.Reste || 0;
this.model.dp=newdate

  }
  mangerForm(f:NgForm)
  {
    let strDate:string = f.value.dp.toString();
    let year= strDate.slice(0,strDate.indexOf("-"))
    let month =strDate.slice(strDate.indexOf("-")+1,strDate.indexOf("-", (strDate.indexOf("-") + 1)))
    let daye =strDate.slice(strDate.indexOf("-", (strDate.indexOf("-") +1))+1,strDate.length)
    if(month.length==1){month="0"+month}
    let newdate=daye+"-"+month+"-"+year+""
    const {Mensualite,PaiedAmmount, dp, Reste}=f.value;
    const obj={date:this.item.Date,mensualite:Mensualite,paiedAmmount:PaiedAmmount,dp:newdate,reste:Reste,validation:"0",id:this.item.id,contrat:this.item.Contrat}
this.shared.UpdateAll(obj,"payment");
if(this.ok)
{this.router.navigateByUrl("/payment")}
  }

}
