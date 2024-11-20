import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Choice-card.component.html',
  styleUrls: ['./Choice-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Choice-card]': 'true'
  }
})

export class ChoiceCardComponent {


}