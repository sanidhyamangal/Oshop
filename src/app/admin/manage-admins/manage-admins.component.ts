import { Component, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-manage-admins',
  templateUrl: './manage-admins.component.html',
  styleUrls: ['./manage-admins.component.css']
})
export class ManageAdminsComponent implements OnDestroy {

  filteredUser;
  users;
  subscription:Subscription;
  constructor( private userService:UserService) {
    this.subscription = this.userService.getAll().subscribe(users=>{
      this.filteredUser = this.users = users;
    });
   }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  toggleAdmin(user){
    this.userService.toggleAdmin(user.$key);
  }
  filter(query:string){
    this.filteredUser = (query)?this.users.filter(u=>u.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())):this.users;
  }
}
