import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Survey-new',
  templateUrl: './Survey-new.component.html',
  styleUrls: ['./Survey-new.component.scss']
})
export class SurveyNewComponent {
  @ViewChild("SurveyForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}