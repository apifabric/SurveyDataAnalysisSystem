import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Surveystatistic-new',
  templateUrl: './Surveystatistic-new.component.html',
  styleUrls: ['./Surveystatistic-new.component.scss']
})
export class SurveystatisticNewComponent {
  @ViewChild("SurveystatisticForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}