import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styles: [`
    h1 {
      font-size: 11px;
      color: gray;
    }
  `] // here we simply add the styles from here.
})
export class AuthorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
