import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Question-card.component.html',
  styleUrls: ['./Question-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Question-card]': 'true'
  }
})

export class QuestionCardComponent {


}