import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyresponsesummaryHomeComponent } from './home/Surveyresponsesummary-home.component';
import { SurveyresponsesummaryNewComponent } from './new/Surveyresponsesummary-new.component';
import { SurveyresponsesummaryDetailComponent } from './detail/Surveyresponsesummary-detail.component';

const routes: Routes = [
  {path: '', component: SurveyresponsesummaryHomeComponent},
  { path: 'new', component: SurveyresponsesummaryNewComponent },
  { path: ':id', component: SurveyresponsesummaryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Surveyresponsesummary-detail-permissions'
      }
    }
  }
];

export const SURVEYRESPONSESUMMARY_MODULE_DECLARATIONS = [
    SurveyresponsesummaryHomeComponent,
    SurveyresponsesummaryNewComponent,
    SurveyresponsesummaryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyresponsesummaryRoutingModule { }