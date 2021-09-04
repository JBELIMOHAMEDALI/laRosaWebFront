import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ArticleService } from 'src/app/service/article.service';
import { SharedService } from 'src/app/service/shared.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-poup-add-update-articles',
  templateUrl: './poup-add-update-articles.component.html',
  styleUrls: ['./poup-add-update-articles.component.css']
})
export class PoupAddUpdateArticlesComponent implements OnInit {

  @Input() add: any;//titre
  @Input() titre: string = "";
  @Input() item: any;
  model: any = {};

  constructor(public activeModal: NgbActiveModal,private artserv:ArticleService,private shared:SharedService) { }

  ngOnInit(): void {
    if(this.add){
      this.model={};
    this.model.ref = "Art-";
  }
  else{
    this.model.ref = this.item.ref;
    this.model.nom = this.item.nom;
    this.model.prix = this.item.prix;
    this.model.mavance = this.item.mavance;
    this.model.annuite = this.item.annuite;
    this.model.mensualite = this.item.mensualite;
    this.model.annuite2 = this.item.annuite2;
    this.model.mensualite2 = this.item.mensualite2;
  }
  }
  mangArt(f: NgForm) {
    const { ref, nom, prix, mavance, annuite, mensualite, annuite2, mensualite2 } = f.value;
    if (this.add) {
      const obj = { ref: ref, nom: nom, prix: prix, mavance: mavance, annuite: annuite, mensualite: mensualite, annuite2: annuite2, mensualite2: mensualite2 };
      this.addArt(obj);
    } else {

      const obj2 = { ref: ref, nom: nom, prix: prix, mavance: mavance, annuite: annuite, mensualite: mensualite, annuite2: annuite2, mensualite2: mensualite2, id: this.item.article_id};
      this.updateArt(obj2);
    }
  }
   addArt(art: any) {
     this.shared.addAll(art,'article').subscribe({next:(data)=>{
      this.activeModal.dismiss();
      swal('Success', '', 'success');
      this.shared.reloadComponent()
    },error:(err)=>{
      this.activeModal.dismiss();
      swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')

    }})
  }
   updateArt(art: any) {
     this.artserv.UpdateArt(art).subscribe({next:(data)=>{
      this.activeModal.dismiss();
      swal('Success', '', 'success');
      this.shared.reloadComponent()
    },error:(err)=>{
      console.log(err);

      this.activeModal.dismiss();
      swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
    }})
   }


}
