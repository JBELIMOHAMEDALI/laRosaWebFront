import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AtherSService } from 'src/app/service/ather-s.service';
import { SharedService } from 'src/app/service/shared.service';
import { AddUpdateUserComponent } from '../add-update-user/add-update-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUser:any[]=[]
  p:number=1;
  term: any;
  constructor(public sahredserv:SharedService,private modalService: NgbModal,private atherserv:AtherSService) { }
  ngOnInit(): void {
    this.getListUser();
  }
  async getListUser() {
    await this.sahredserv.getAllArticle("user").subscribe({
      next: (data) => {
        const donne: any = data;
          this.listUser = donne;
          console.log(donne);

      }, error: (err) => {
        this.listUser = [];
      }
    })
  }
  openADD()
  {
    const modalRef = this.modalService.open(AddUpdateUserComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.add = true;
    modalRef.componentInstance.titre = "Ajouter Utilisateur";
    // this.sahredserv.reloadComponent()
  }
  openUpdate(item:any)
  {
    const modalRef = this.modalService.open(AddUpdateUserComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.add = false;
    modalRef.componentInstance.titre = "Modifier Utilisateur";
    modalRef.componentInstance.item = item;
  }
}
