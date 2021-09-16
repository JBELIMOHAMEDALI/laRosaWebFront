import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-update-payment-poup',
  templateUrl: './update-payment-poup.component.html',
  styleUrls: ['./update-payment-poup.component.css']
})
export class UpdatePaymentPoupComponent implements OnInit {
  @Input() add: any;//titre
  @Input() titre: string = "";
  @Input() item: any;
  model: any = {};
  constructor(public activeModal: NgbActiveModal,private shared:SharedService) { }


  ngOnInit(): void {
  }
  mangerForm(f:NgForm)
  {}
}
