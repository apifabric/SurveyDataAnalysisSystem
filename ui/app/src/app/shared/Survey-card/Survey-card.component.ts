import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Survey-card.component.html',
  styleUrls: ['./Survey-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Survey-card]': 'true'
  }
})

export class SurveyCardComponent {


}