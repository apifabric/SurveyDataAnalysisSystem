import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Questiontype-new',
  templateUrl: './Questiontype-new.component.html',
  styleUrls: ['./Questiontype-new.component.scss']
})
export class QuestiontypeNewComponent {
  @ViewChild("QuestiontypeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}