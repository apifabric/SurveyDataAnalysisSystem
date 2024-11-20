import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Surveytopic-new',
  templateUrl: './Surveytopic-new.component.html',
  styleUrls: ['./Surveytopic-new.component.scss']
})
export class SurveytopicNewComponent {
  @ViewChild("SurveytopicForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}