import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RespondentHomeComponent } from './home/Respondent-home.component';
import { RespondentNewComponent } from './new/Respondent-new.component';
import { RespondentDetailComponent } from './detail/Respondent-detail.component';

const routes: Routes = [
  {path: '', component: RespondentHomeComponent},
  { path: 'new', component: RespondentNewComponent },
  { path: ':id', component: RespondentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Respondent-detail-permissions'
      }
    }
  },{
    path: ':respondent_id/Respondentactivity', loadChildren: () => import('../Respondentactivity/Respondentactivity.module').then(m => m.RespondentactivityModule),
    data: {
        oPermission: {
            permissionId: 'Respondentactivity-detail-permissions'
        }
    }
},{
    path: ':respondent_id/Response', loadChildren: () => import('../Response/Response.module').then(m => m.ResponseModule),
    data: {
        oPermission: {
            permissionId: 'Response-detail-permissions'
        }
    }
}
];

export const RESPONDENT_MODULE_DECLARATIONS = [
    RespondentHomeComponent,
    RespondentNewComponent,
    RespondentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RespondentRoutingModule { }