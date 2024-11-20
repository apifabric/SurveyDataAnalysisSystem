import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Choice-new',
  templateUrl: './Choice-new.component.html',
  styleUrls: ['./Choice-new.component.scss']
})
export class ChoiceNewComponent {
  @ViewChild("ChoiceForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}