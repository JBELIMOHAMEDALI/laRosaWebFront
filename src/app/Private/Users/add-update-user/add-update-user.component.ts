import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/service/shared.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.css']
})
export class AddUpdateUserComponent implements OnInit {
  @Input() add: any;//titre
  @Input() titre: string = "";
  @Input() item: any;
  model: any = {};
  constructor(public activeModal: NgbActiveModal,private shared:SharedService) { }


  ngOnInit(): void {

    console.log
    (JSON.stringify(this.item.article_id))
    if(this.add){
      this.model={};
    this.model.ref = "Art-";
  }
  else{
    this.model.cin = this.item.cin;
    this.model.nom = this.item.nom;
    this.model.telephone = this.item.telephone;
    this.model.username = this.item.username;
    this.model.passworad = this.item.passworad;
    this.model.type = this.item.type;

  }

  }
  mangerForm(f:NgForm)
  {
    const{cin,nom,telephone,username,passworad,type}=f.value;
    if(this.add)
    {
      const obj = { cin: cin, nom: nom, telephone: telephone,username:username,passworad:passworad, type: type};
    // alert(JSON.stringify(obj))

      this.addUser(obj);
    }else{
      const obj = { cin: cin, nom: nom, telephone: telephone,username:username,passworad:passworad, type: type,id:this.item.id};
      this.shared.UpdateAll(obj,'user');
    }
  }

  addUser(obj: any) {
    this.shared.addAll(obj,'user').subscribe({next:(data)=>{
     this.activeModal.dismiss();
     swal('Success', '', 'success');
     this.shared.reloadComponent()
   },error:(err)=>{
     this.activeModal.dismiss();
     swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')

   }})
  }

}
