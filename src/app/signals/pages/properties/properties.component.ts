import { Component, signal, computed, effect } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {

  public counter = signal(10);

  public user = signal<User>({
    "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
  });

  public fullName =  computed ( () => `${this.user().first_name} ${this.user().last_name}` );

  public userChangedEffect = effect (() => {
  //* por alguna raonx on funciona con el user  ?? 
    //?solo cambia cada vez que el usuario o vontador caqmbain
console.log(`${this.user().first_name} - ${ this.counter()}`);

  });

  increaseBy(value : number) {

   this.counter.update(current => current +value )
  }
  onFieldUpdated (field : keyof User, value :string) {

  //  this.user.set({
  //   ...this.user(),
  //   [field]: value,
  //  })

  // this.user.update( current => ({
  //   ...current,
  //   [field] :value
  // }))

  this.user.update( current => {

    switch(field) {
      case 'id': current.id = Number(value);
      break;
      case 'email': current.email = value;
      break;
      case 'first_name':current.first_name = value ;
      break;
      case 'last_name': current.last_name = value;
      break;
      case 'avatar': current.avatar = value;
      break;
    }

      return current ;
  })




  }
}
