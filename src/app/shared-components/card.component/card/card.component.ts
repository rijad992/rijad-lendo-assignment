import { Component, HostListener, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('200ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('200ms', style({opacity: 0}))
        ])
      ]
    ),
    trigger('zoomImage', [
      state('true', style({ height: '570px' })),
      state('false', style({ height: '550px' })),
      transition('false <=> true', animate(500))
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() imageUrl: string;
  @Input() rating: string;
  @Input() releaseDate: string;

  showOverlay = false;

  constructor() { }

  @HostListener('mouseover')
  mouseOver() {
    this.showOverlay = true;
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.showOverlay = false;
  }

  ngOnInit(): void {

  }

}
