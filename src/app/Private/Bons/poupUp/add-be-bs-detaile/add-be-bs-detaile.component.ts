import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AtherSService } from 'src/app/service/ather-s.service';
import { SharedService } from 'src/app/service/shared.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-be-bs-detaile',
  templateUrl: './add-be-bs-detaile.component.html',
  styleUrls: ['./add-be-bs-detaile.component.css']
})
export class AddBeBsDetaileComponent implements OnInit {
  @Input() add: any;//titre
  @Input() titre: string = "";
  @Input() id: any;
  @Input() nomTab: string="";
  model: any = {};
  listRegion: any[] = []
  listZone: any[] = [];
  listContra: any[] = []
  regition: string = ""
  obj:any;
  constructor(public activeModal: NgbActiveModal, private shared: SharedService, private atherserv: AtherSService) { }


  ngOnInit(): void {
    this.getlistRgion();
    this.getListContra();
  }
  mangerForm(f: NgForm) {//(id_num_be,num_contrat,zone,region)
    const { num_contrat, region, zone } = f.value;
    if(this.nomTab==="docbe1")
    {
      this.obj = { id_num_be: this.id, num_contrat: num_contrat['numero'], region: this.regition, zone: zone }
    }else
    {
      this.obj = { id_num_bs: this.id, num_contrat: num_contrat['numero'], region: this.regition, zone: zone }
    }
    this.shared.addAll(this.obj,this.nomTab).subscribe({
      next: (data) => {
        this.activeModal.dismiss()
        this.shared.reloadComponent();
        swal('Success', '', 'success');

      }, error: (err) => {
        this.activeModal.dismiss()
        swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
      }
    })
  }

  async getListZone(id: string) {
    await this.atherserv.getZoneBayRegion(id).subscribe({
      next: (data) => {
        const donne: any = data;
        this.listZone = donne;
      }, error: (err) => {
        this.listZone = [];
      }
    })
  }

  async getlistRgion() {
    await this.shared.getAllArticle("region").subscribe({
      next: (data) => {
        const donne: any = data;
        this.listRegion = donne;
      }, error: (err) => {
        this.listRegion = [];
      }
    })
  }
  getRegion(event: any) {
    this.regition = event.target.options[event.target.options.selectedIndex].text;
    this.getListZone(event.target.value);
  }
  async getListContra() {
    await this.shared.getAllArticle("contrat").subscribe({
      next: (data) => {
        const donne: any = data;
        this.listContra = donne;
      }, error: (err) => {
        this.listContra = [];
      }
    })
  }
}
