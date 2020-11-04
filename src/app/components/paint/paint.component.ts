import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.less']
})
export class PaintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mousemove') motion(event) {
    console.log(event);
  }
}
