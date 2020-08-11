import { Component, OnInit, Input } from '@angular/core';//con Input puedo pasarle una entrada a mi componente

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  flag = true;
  @Input() nameUser;

  constructor() { }

  ngOnInit(): void {
  }

}
