import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Topic-card.component.html',
  styleUrls: ['./Topic-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Topic-card]': 'true'
  }
})

export class TopicCardComponent {


}