import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'], // here the styles file is simply referenced. 
  encapsulation: ViewEncapsulation.Emulated // .Emulated is default, .Native is the native shadow DOM that only some browsers have, .none turns view encapsulation off and the styling properties can be used globally rather than on the current component.
})
export class QuoteComponent implements OnInit {

  isFavorite: false;

  // we import the renderer from angular/core and it is a helper clas that can be used to render things in our template:
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

}
