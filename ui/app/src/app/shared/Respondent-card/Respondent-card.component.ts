import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Respondent-card.component.html',
  styleUrls: ['./Respondent-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Respondent-card]': 'true'
  }
})

export class RespondentCardComponent {


}