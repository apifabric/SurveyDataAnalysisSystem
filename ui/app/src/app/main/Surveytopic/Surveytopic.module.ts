import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SURVEYTOPIC_MODULE_DECLARATIONS, SurveytopicRoutingModule} from  './Surveytopic-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SurveytopicRoutingModule
  ],
  declarations: SURVEYTOPIC_MODULE_DECLARATIONS,
  exports: SURVEYTOPIC_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SurveytopicModule { }