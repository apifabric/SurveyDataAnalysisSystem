import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Respondent-new',
  templateUrl: './Respondent-new.component.html',
  styleUrls: ['./Respondent-new.component.scss']
})
export class RespondentNewComponent {
  @ViewChild("RespondentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}