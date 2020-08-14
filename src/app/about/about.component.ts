import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  posts: Pos[];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = [];
    })
   }

  ngOnInit(): void {
  }

}
