import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveystatisticHomeComponent } from './home/Surveystatistic-home.component';
import { SurveystatisticNewComponent } from './new/Surveystatistic-new.component';
import { SurveystatisticDetailComponent } from './detail/Surveystatistic-detail.component';

const routes: Routes = [
  {path: '', component: SurveystatisticHomeComponent},
  { path: 'new', component: SurveystatisticNewComponent },
  { path: ':id', component: SurveystatisticDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Surveystatistic-detail-permissions'
      }
    }
  }
];

export const SURVEYSTATISTIC_MODULE_DECLARATIONS = [
    SurveystatisticHomeComponent,
    SurveystatisticNewComponent,
    SurveystatisticDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveystatisticRoutingModule { }