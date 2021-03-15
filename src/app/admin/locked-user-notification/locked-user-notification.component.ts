import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locked-user-notification',
  templateUrl: './locked-user-notification.component.html',
  styleUrls: ['./locked-user-notification.component.scss']
})
export class LockedUserNotificationComponent implements OnInit {
  users: any

  searchInput!: string
  userBySearch: any;

  constructor(private as: AdminService, private router: Router) { }

  ngOnInit(): void {
    
    this.as.getUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
      this.userBySearch = this.users;

    },
      (err) => {
        console.log('Error is:', err);

      })
  }
  searchUsers(uname: String) {
    console.log(uname);

  
      this.userBySearch = this.users.filter((user: any) => user.username.toLowerCase().includes(uname));
    
  }


}
