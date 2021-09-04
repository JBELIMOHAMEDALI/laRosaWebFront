import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-test-poupup',
  templateUrl: './test-poupup.component.html',
  styleUrls: ['./test-poupup.component.css']
})
export class TestPoupupComponent implements OnInit {
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
