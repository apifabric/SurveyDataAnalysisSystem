import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Questiontype-card.component.html',
  styleUrls: ['./Questiontype-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Questiontype-card]': 'true'
  }
})

export class QuestiontypeCardComponent {


}