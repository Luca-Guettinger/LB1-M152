import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit, AfterViewInit {

  @ViewChild('myCanvas') myDiv: ElementRef<HTMLCanvasElement> | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    const ctx = this.myDiv?.nativeElement.getContext('2d');
    if (ctx == null) {
      console.log();
      return;
    }

    ctx.font = '30px Arial';
    ctx.strokeText('Hello World', 10, 50);
  }
}
