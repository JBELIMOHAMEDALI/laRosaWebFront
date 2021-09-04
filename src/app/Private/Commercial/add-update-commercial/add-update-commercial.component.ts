import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/service/shared.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-update-commercial',
  templateUrl: './add-update-commercial.component.html',
  styleUrls: ['./add-update-commercial.component.css']
})
export class AddUpdateCommercialComponent implements OnInit {

  @Input() add: any;//titre
  @Input() titre: string = "";
  @Input() item: any;
  model: any = {};
  constructor(public activeModal: NgbActiveModal,private shared:SharedService) { }
  ngOnInit(): void {
    if(this.add)
    {
      this.model={}
    }
    else{
      this.model.cin=this.item.cin;
      this.model.type=this.item.type;
      this.model.Numero=this.item.Numero;
      this.model.nom=this.item.nom;
    }
  }
  mangCom(f:NgForm)
  {
    const{cin,nom,Numero,type}=f.value;
    if(this.add)
    {
      const obj = { cin: cin, nom: nom, Numero: Numero, type: type};
      this.addCom(obj);
    }else{
      const obj = { cin: cin, nom: nom, Numero: Numero, type: type,id:this.item.id};
this.shared.UpdateAll(obj,'agent');
    }
  }
  addCom(obj: any) {
    this.shared.addAll(obj,'agent').subscribe({next:(data)=>{
     this.activeModal.dismiss();
     swal('Success', '', 'success');
     this.shared.reloadComponent()
   },error:(err)=>{
     this.activeModal.dismiss();

     swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')

   }})
  }
}
