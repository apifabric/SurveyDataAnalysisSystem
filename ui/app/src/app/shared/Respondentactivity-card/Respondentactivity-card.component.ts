import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Respondentactivity-card.component.html',
  styleUrls: ['./Respondentactivity-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Respondentactivity-card]': 'true'
  }
})

export class RespondentactivityCardComponent {


}