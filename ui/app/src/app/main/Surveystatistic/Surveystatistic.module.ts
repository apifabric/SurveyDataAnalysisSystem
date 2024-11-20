import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SURVEYSTATISTIC_MODULE_DECLARATIONS, SurveystatisticRoutingModule} from  './Surveystatistic-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SurveystatisticRoutingModule
  ],
  declarations: SURVEYSTATISTIC_MODULE_DECLARATIONS,
  exports: SURVEYSTATISTIC_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SurveystatisticModule { }