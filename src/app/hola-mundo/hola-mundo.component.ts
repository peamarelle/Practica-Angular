import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  title = 'Heros';

  heros = ['Goku', 'Vegeta', 'Batman', 'El Chapulín Colorado', 'Superman', 'Saitama'];

  constructor() { }

  ngOnInit(): void {
  }

}
