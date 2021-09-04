import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/service/shared.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-poup-up-delete-all',
  templateUrl: './poup-up-delete-all.component.html',
  styleUrls: ['./poup-up-delete-all.component.css']
})
export class PoupUpDeleteAllComponent implements OnInit {
  @Input() titre: string = "";
  @Input() id: string = "";
  @Input() point: string = "";//rederect
  @Input() rederect: boolean = false;//
  @Input() pageRederect: string = "";//

  constructor(public activeModal: NgbActiveModal,private sharedServ:SharedService,private router:Router) {}

  ngOnInit(): void {
    // alert(this.id)
  }
  deleteAll()
  {

  this.sharedServ.DeleteAll(this.id,this.point).subscribe({next:(data)=>{
    this.activeModal.dismiss();
    if(!this.rederect){ this.sharedServ.reloadComponent()}else{  this.router.navigate([this.pageRederect]);}
    swal('Success', '', 'success');

  },error:(err)=>{
    this.activeModal.dismiss();
    swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
  }})

  }

}
