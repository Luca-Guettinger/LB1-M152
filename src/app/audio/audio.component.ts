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
  }
}
