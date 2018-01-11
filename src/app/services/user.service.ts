import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from './auth.service';
import * as firebase from 'firebase';

import { AppUser } from '../models/app-user';

import 'rxjs/add/operator/take';


@Injectable()
export class UserService {

  constructor(private db:AngularFireDatabase) { }

  save(user:firebase.User){
    this.db.object('users/'+user.uid).update({
      name:user.displayName,
      email:user.email
    });
  }

  get(uid:string):FirebaseObjectObservable<AppUser>{
    return this.db.object('users/'+uid);
  }

  getAll(){
    return this.db.list('users');
  }

  async toggleAdmin(value:string){
   let user$ =  await this.get(value);
   user$.take(1).subscribe(user=>{
     let toggleState = !user.isAdmin;
     user$.update({
       isAdmin:toggleState
     });     
   });
  }
}
