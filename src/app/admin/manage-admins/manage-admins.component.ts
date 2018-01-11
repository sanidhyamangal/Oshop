import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-manage-admins',
  templateUrl: './manage-admins.component.html',
  styleUrls: ['./manage-admins.component.css']
})
export class ManageAdminsComponent implements OnInit {

  users$;
  constructor( private userService:UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getAll();
  }

  toggleAdmin(user){
    this.userService.toggleAdmin(user.$key);
  }
}
