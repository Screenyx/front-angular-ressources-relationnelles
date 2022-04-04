import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { UserDTO } from './user.DTO';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

  public usersList: UserDTO[];
  public usersExist: boolean = false;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getUsers().subscribe(value => {
      console.log(value);
      if(value!=null){
        this.usersList = value;
        if(this.usersList.length != 0){
          this.usersExist = true;
        }
      }
    });
  }

}
