import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Surveystatistic-card.component.html',
  styleUrls: ['./Surveystatistic-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Surveystatistic-card]': 'true'
  }
})

export class SurveystatisticCardComponent {


}