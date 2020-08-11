import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users = ['Joe', 'Kurt', 'Dee Dee', 'Dave', 'Marky'];

  addUser(newUser) {
    this.users.push(newUser.value);
    return false;
  }

  deleteUser(user) {
    let index = this.users.indexOf(user);
    if(index!==-1){
      this.users.splice(index, 1);
    }
  }
}
