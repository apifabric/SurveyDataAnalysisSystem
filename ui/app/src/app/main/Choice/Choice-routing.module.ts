import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceHomeComponent } from './home/Choice-home.component';
import { ChoiceNewComponent } from './new/Choice-new.component';
import { ChoiceDetailComponent } from './detail/Choice-detail.component';

const routes: Routes = [
  {path: '', component: ChoiceHomeComponent},
  { path: 'new', component: ChoiceNewComponent },
  { path: ':id', component: ChoiceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Choice-detail-permissions'
      }
    }
  },{
    path: ':most_chosen_choice/Questionstatistic', loadChildren: () => import('../Questionstatistic/Questionstatistic.module').then(m => m.QuestionstatisticModule),
    data: {
        oPermission: {
            permissionId: 'Questionstatistic-detail-permissions'
        }
    }
},{
    path: ':choice_id/Response', loadChildren: () => import('../Response/Response.module').then(m => m.ResponseModule),
    data: {
        oPermission: {
            permissionId: 'Response-detail-permissions'
        }
    }
}
];

export const CHOICE_MODULE_DECLARATIONS = [
    ChoiceHomeComponent,
    ChoiceNewComponent,
    ChoiceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoiceRoutingModule { }