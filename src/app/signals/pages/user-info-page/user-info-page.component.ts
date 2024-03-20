import { Component, OnInit, inject, signal } from '@angular/core';
import { UserServiceService } from '../../services/userService.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit {



  private userService = inject(UserServiceService);
  public userId = signal(1);


  public currentUser =signal<User|undefined>(undefined);
  public userWasFound =signal(true);


 ngOnInit(): void {
   this.loadUser(this.userId())
  }

  loadUser(id : number) {
        if(id <= 0) return ;

        this.userId.set(id);
        this.currentUser.set(undefined);

        this.userService.getUserById(id)
        .subscribe(user => {
          this.currentUser.set(user);
        })  //? cuando no nos interesa el valor anterior hay que usar el set

  }

}
