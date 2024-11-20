import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyHomeComponent } from './home/Survey-home.component';
import { SurveyNewComponent } from './new/Survey-new.component';
import { SurveyDetailComponent } from './detail/Survey-detail.component';

const routes: Routes = [
  {path: '', component: SurveyHomeComponent},
  { path: 'new', component: SurveyNewComponent },
  { path: ':id', component: SurveyDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Survey-detail-permissions'
      }
    }
  },{
    path: ':survey_id/Question', loadChildren: () => import('../Question/Question.module').then(m => m.QuestionModule),
    data: {
        oPermission: {
            permissionId: 'Question-detail-permissions'
        }
    }
},{
    path: ':survey_id/Surveyresponsesummary', loadChildren: () => import('../Surveyresponsesummary/Surveyresponsesummary.module').then(m => m.SurveyresponsesummaryModule),
    data: {
        oPermission: {
            permissionId: 'Surveyresponsesummary-detail-permissions'
        }
    }
},{
    path: ':survey_id/Surveystatistic', loadChildren: () => import('../Surveystatistic/Surveystatistic.module').then(m => m.SurveystatisticModule),
    data: {
        oPermission: {
            permissionId: 'Surveystatistic-detail-permissions'
        }
    }
},{
    path: ':survey_id/Surveytopic', loadChildren: () => import('../Surveytopic/Surveytopic.module').then(m => m.SurveytopicModule),
    data: {
        oPermission: {
            permissionId: 'Surveytopic-detail-permissions'
        }
    }
}
];

export const SURVEY_MODULE_DECLARATIONS = [
    SurveyHomeComponent,
    SurveyNewComponent,
    SurveyDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }