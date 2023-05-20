import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ProfileComponent} from "../profile.component";
import {Firestore} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-linked-cards',
  templateUrl: './linked-cards.component.html',
  styleUrls: ['./linked-cards.component.css']
})
export class LinkedCardsComponent implements OnInit{
  @Input() card?: string[];


  constructor() {


  }

  ngOnInit() {
    console.log(this.card![0]);
  }
}
