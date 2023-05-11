import {Component, Input, OnInit} from '@angular/core';
import { Firestore, collection, collectionData, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent {
  @Input()
  name?: string | undefined;
  @Input()
  lastName?: string | undefined;

  user: any;
  actualuser$: Observable<any[]> | null = null; // inicializando con null
  constructor(private firestore: Firestore, public auth: AngularFireAuth) {


  }

  private getCurrentUserUid(): string | null {
    return this.user ? this.user.uid : null;
  }
}
