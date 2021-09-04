import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/service/shared.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-update-zone',
  templateUrl: './add-update-zone.component.html',
  styleUrls: ['./add-update-zone.component.css']
})
export class AddUpdateZoneComponent implements OnInit {
  @Input() add: any;//titre
  @Input() titre: string = "";
  @Input() item: any;
  model: any = {};
  listRegion: any[] = []
  id_region: string = "";
  constructor(public activeModal: NgbActiveModal, private shared: SharedService) { }


  ngOnInit(): void {
    this.getlistRgion()
  }

  mangerForm(f: NgForm) {
    const { region, nom } = f.value;
    const obj = { id_region: region, nom_zone: nom };
    this.shared.addAll(obj, "zone").subscribe({
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

}
