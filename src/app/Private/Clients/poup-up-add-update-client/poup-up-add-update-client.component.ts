import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AtherSService } from 'src/app/service/ather-s.service';
import { SharedService } from 'src/app/service/shared.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-poup-up-add-update-client',
  templateUrl: './poup-up-add-update-client.component.html',
  styleUrls: ['./poup-up-add-update-client.component.css']
})
export class PoupUpAddUpdateClientComponent implements OnInit {
  @Input() add: any;//titre
  @Input() titre: string = "";
  @Input() item: any;
  @Input() id_reg: any;
  @Input() id_zone: any;
  model: any = {};
  listZone:any[]=[]
  listRegion:any[]=[]
  regition:string="";
  id_regition:any;
  region_name_updaye:string="";
  constructor(public activeModal: NgbActiveModal,private shared:SharedService,private atherserv:AtherSService) { }
//

  ngOnInit(): void {
    // this.getListZone();
    // this.getIdRegion(this.item.region);
    this.getlistRgion();
    if(this.add)
    {
      this.model={};
    }else{
      this.getListZone(this.id_reg);
      this.model.genre = this.item.greeting ;
      this.model.nom = this.item.nom ;
      this.model.tel1 = this.item.phone ;
      this.model.tel2 = this.item['2phone'] || this.item.phone2 ;
      this.model.cin = this.item.cin ;
      this.model.adresse = this.item.adresse ;
      this.model.region = this.id_reg.toString() ;
      this.model.zone = this.item.zone ;
    }
  }
   async mangerForm(f:NgForm)
  {
    const {genre,nom,tel1,tel2,cin,adresse,region,zone}=f.value;

    if(this.add)
    {
      const obj= {cin:cin,nom:nom,greeting:genre,phone:tel1,phone2:tel2,adresse:adresse,zone:zone,region:this.regition,solvale:"0"}
      this.addCli(obj);
    }else{
      await this.atherserv.getOneBayId(region,"region").subscribe({
        next: (data) => {
          const donne: any = data;
            // this.region_name_updaye = donne.nom_region;
            const obj= {cin:cin,nom:nom,greeting:genre,phone:tel1,phone2:tel2,adresse:adresse,zone:zone,region:donne.nom_region,solvale:"0",id:this.item.id}
            // alert(JSON.stringify(obj))
      this.shared.UpdateAll(obj,"client");

        }, error: (err) => {
          this.region_name_updaye = "-";

        }
      })
      // alert(this.region_name_updaye+"***")

    }
  }
  async getListZone(id:string) {
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
  getRegion(event:any)
  {
    this.regition = event.target.options[event.target.options.selectedIndex].text;
    this.getListZone(event.target.value);
  }
  addCli(obj: any) {
    this.shared.addAll(obj,'client').subscribe({next:(data)=>{
     this.activeModal.dismiss();
     swal('Success', '', 'success');
     this.shared.reloadComponent()
   },error:(err)=>{
     this.activeModal.dismiss();
     swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')

   }})
 }



}
