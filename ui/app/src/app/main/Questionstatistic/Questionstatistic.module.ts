import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {QUESTIONSTATISTIC_MODULE_DECLARATIONS, QuestionstatisticRoutingModule} from  './Questionstatistic-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    QuestionstatisticRoutingModule
  ],
  declarations: QUESTIONSTATISTIC_MODULE_DECLARATIONS,
  exports: QUESTIONSTATISTIC_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QuestionstatisticModule { }