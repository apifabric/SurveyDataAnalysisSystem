import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Questionstatistic-card.component.html',
  styleUrls: ['./Questionstatistic-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Questionstatistic-card]': 'true'
  }
})

export class QuestionstatisticCardComponent {


}