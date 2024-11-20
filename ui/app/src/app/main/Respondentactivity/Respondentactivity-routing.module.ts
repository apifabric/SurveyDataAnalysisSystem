import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RespondentactivityHomeComponent } from './home/Respondentactivity-home.component';
import { RespondentactivityNewComponent } from './new/Respondentactivity-new.component';
import { RespondentactivityDetailComponent } from './detail/Respondentactivity-detail.component';

const routes: Routes = [
  {path: '', component: RespondentactivityHomeComponent},
  { path: 'new', component: RespondentactivityNewComponent },
  { path: ':id', component: RespondentactivityDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Respondentactivity-detail-permissions'
      }
    }
  }
];

export const RESPONDENTACTIVITY_MODULE_DECLARATIONS = [
    RespondentactivityHomeComponent,
    RespondentactivityNewComponent,
    RespondentactivityDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RespondentactivityRoutingModule { }