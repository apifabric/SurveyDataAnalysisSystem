import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SURVEY_MODULE_DECLARATIONS, SurveyRoutingModule} from  './Survey-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SurveyRoutingModule
  ],
  declarations: SURVEY_MODULE_DECLARATIONS,
  exports: SURVEY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SurveyModule { }