import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionHomeComponent } from './home/Question-home.component';
import { QuestionNewComponent } from './new/Question-new.component';
import { QuestionDetailComponent } from './detail/Question-detail.component';

const routes: Routes = [
  {path: '', component: QuestionHomeComponent},
  { path: 'new', component: QuestionNewComponent },
  { path: ':id', component: QuestionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Question-detail-permissions'
      }
    }
  },{
    path: ':question_id/Choice', loadChildren: () => import('../Choice/Choice.module').then(m => m.ChoiceModule),
    data: {
        oPermission: {
            permissionId: 'Choice-detail-permissions'
        }
    }
},{
    path: ':question_id/Questionstatistic', loadChildren: () => import('../Questionstatistic/Questionstatistic.module').then(m => m.QuestionstatisticModule),
    data: {
        oPermission: {
            permissionId: 'Questionstatistic-detail-permissions'
        }
    }
},{
    path: ':question_id/Response', loadChildren: () => import('../Response/Response.module').then(m => m.ResponseModule),
    data: {
        oPermission: {
            permissionId: 'Response-detail-permissions'
        }
    }
}
];

export const QUESTION_MODULE_DECLARATIONS = [
    QuestionHomeComponent,
    QuestionNewComponent,
    QuestionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }