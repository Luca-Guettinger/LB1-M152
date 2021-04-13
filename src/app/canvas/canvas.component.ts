import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('myCanvas') canvas: ElementRef<HTMLCanvasElement> | undefined;
  ctx: CanvasRenderingContext2D | undefined;

  x = 100;
  y = 100;
  speedX = 1;
  speedY = 1;

  ngOnInit(): void {
    this.x = Math.random() * 200;
    this.y = Math.random() * 200;
    this.speedX = Math.random() * 3;
    this.speedY = Math.random() * 3;
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    this.ctx = this.canvas?.nativeElement.getContext('2d');
    if (this.ctx == null) {
      console.log();
      return;
    }

    this.update();
  }
  update(): void {
    this.x += this.speedX;
    if (this.x > 400 || this.x < 0) {
      this.speedX = this.speedX * -1;
    }
    this.y += this.speedY;
    if (this.y > 400 || this.y < 0) {
      this.speedY = this.speedY * -1;
    }
    if (this.ctx == null) {
      console.log();
      return;
    }
    this.ctx.clearRect(0, 0, 400, 300);

    this.ctx.font = '30px Arial';
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
    this.ctx.fillStyle = 'yellow';
    this.ctx.fill();
    this.ctx.stroke();

    window.requestAnimationFrame(time => {
      this.update();
    });
  }
}
