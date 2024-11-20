import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SURVEYRESPONSESUMMARY_MODULE_DECLARATIONS, SurveyresponsesummaryRoutingModule} from  './Surveyresponsesummary-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SurveyresponsesummaryRoutingModule
  ],
  declarations: SURVEYRESPONSESUMMARY_MODULE_DECLARATIONS,
  exports: SURVEYRESPONSESUMMARY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SurveyresponsesummaryModule { }