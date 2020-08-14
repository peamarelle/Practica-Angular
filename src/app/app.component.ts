import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  name: string = 'Jhon Lennon';
  age: number = 40;

  posts = []; //constante

  users = ['Joe', 'Kurt', 'Dee Dee', 'Dave', 'Marky'];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }

  addUser(newUser) {
    this.users.push(newUser.value);
    newUser.value='';
    return false;
  }

  deleteUser(user) {
    let index = this.users.indexOf(user);
    if(index!==-1){
      this.users.splice(index, 1);
    }
  }
}
