import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit, AfterViewInit {

  constructor() { }

  counter = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => this.genContentOnScroll());
  }
  genContentOnScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      const p = document.createElement('div');
      this.counter++;
      p.innerHTML = '' + this.counter;
      document.body.appendChild(p);
    }
  }
}
