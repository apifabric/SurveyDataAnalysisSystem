import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {QUESTIONTYPE_MODULE_DECLARATIONS, QuestiontypeRoutingModule} from  './Questiontype-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    QuestiontypeRoutingModule
  ],
  declarations: QUESTIONTYPE_MODULE_DECLARATIONS,
  exports: QUESTIONTYPE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QuestiontypeModule { }