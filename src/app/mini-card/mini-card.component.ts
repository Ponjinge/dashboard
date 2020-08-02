import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent {

  @Input() icon: string;
  @Input() title: string;
  @Input() value: number;
  @Input() color: string;
  @Input() isIncrease: boolean;
  @Input() isCurrency: boolean;
  @Input() duration: string;
  @Input() percentValue: number;

  constructor() { }

}
