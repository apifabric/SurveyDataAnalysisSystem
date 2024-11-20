import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RESPONDENT_MODULE_DECLARATIONS, RespondentRoutingModule} from  './Respondent-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    RespondentRoutingModule
  ],
  declarations: RESPONDENT_MODULE_DECLARATIONS,
  exports: RESPONDENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RespondentModule { }