import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/service/shared.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-update-region',
  templateUrl: './add-update-region.component.html',
  styleUrls: ['./add-update-region.component.css']
})
export class AddUpdateRegionComponent implements OnInit {
  @Input() add: any;//titre
  @Input() titre: string = "";
  @Input() item: any;
  model: any = {};
  constructor(public activeModal: NgbActiveModal,private shared:SharedService) { }


  ngOnInit(): void {
  }
  mangerForm(f:NgForm)
  {
  this.shared.addAll({nom_region:f.value.nom},"region").subscribe({next:(data)=>{
    this.activeModal.dismiss();
    swal('Success', '', 'success');
    this.shared.reloadComponent()
  },error:(err)=>{
    this.activeModal.dismiss();
    swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
  }})
  }
}
