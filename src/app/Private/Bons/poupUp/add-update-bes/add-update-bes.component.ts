import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/service/shared.service';
import { DatePipe } from '@angular/common'
import swal from 'sweetalert';
import * as moment from 'moment';
import { AtherSService } from 'src/app/service/ather-s.service';
@Component({
  selector: 'app-add-update-bes',
  templateUrl: './add-update-bes.component.html',
  styleUrls: ['./add-update-bes.component.css']
})
export class AddUpdateBesComponent implements OnInit {
  @Input() add: any;//titre
  @Input() titre: string = "";
  @Input() item: any;
  @Input() nomControler: any;
  model: any = {};
  listRecouvreur:any[]=[];
  constructor(public activeModal: NgbActiveModal,private atherser:AtherSService, private shared: SharedService, public datepipe: DatePipe) { }


  ngOnInit(): void {
    this.getListAgontRecouvreur()
    if (!this.add) {
      let dateString: string = this.item.date;
      const day = dateString.substr(0, 2);
      const month = dateString.substr(3, 2);
      const year = dateString.substr(6, 4);
      const newDate = year + "-" + month + "-" + day
      this.model.date = newDate;
      //date ++ recouvreur
      this.model.recouvreur = this.item.recouvreur;
    } else {
      this.model = {};
    }
  }
  async mangerForm(f: NgForm) {
    // alert(JSON.stringify(f.value.date))
    const date = this.datepipe.transform(f.value.date, 'dd-MM-yyyy');
    const recouvreur = f.value.recouvreur;
    if (this.add) {
      const obj = { date: date, recouvreur: recouvreur }
      this.addCli(obj);
    } else {
      const date1 = this.datepipe.transform(f.value.date, 'dd-MM-yyyy');
      const recouvreur1 = f.value.recouvreur;
      const obj1 = { date: date1, recouvreur: recouvreur1, id: this.item.documentno.toString() }
      // alert(JSON.stringify(obj))
      this.shared.UpdateAll(obj1,this.nomControler);
    }
  }

  addCli(obj: any) {
    this.shared.addAll(obj, this.nomControler).subscribe({
      next: (data) => {
        this.activeModal.dismiss();
        swal('Success', '', 'success');
        this.shared.reloadComponent()
      }, error: (err) => {
        this.activeModal.dismiss();
        swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')

      }
    })
  }

  async getListAgontRecouvreur() {
    await this.atherser.getAgontByType("Recouvreur").subscribe({
      next: (data) => {
        const donne: any = data;
        this.listRecouvreur = donne;
      }, error: (err) => {
        this.listRecouvreur = [];
      }
    })
  }
}
