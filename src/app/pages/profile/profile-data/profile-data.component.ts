import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent {
  user: any;
  actualuser$: Observable<any[]> | null = null; // inicializando con null

  constructor(private firestore: Firestore, public auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      this.user = user;
      if (user) {
        const userDoc = doc(this.firestore, `Usuarios/${user.uid}`);
        const aCollection = collection(userDoc, 'data');
        this.actualuser$ = collectionData(aCollection);
      }
    });
  }

  private getCurrentUserUid(): string | null {
    return this.user ? this.user.uid : null;
  }
}
