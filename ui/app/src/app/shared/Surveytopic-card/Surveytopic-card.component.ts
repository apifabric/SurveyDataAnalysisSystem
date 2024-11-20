import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Surveytopic-card.component.html',
  styleUrls: ['./Surveytopic-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Surveytopic-card]': 'true'
  }
})

export class SurveytopicCardComponent {


}