import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestiontypeHomeComponent } from './home/Questiontype-home.component';
import { QuestiontypeNewComponent } from './new/Questiontype-new.component';
import { QuestiontypeDetailComponent } from './detail/Questiontype-detail.component';

const routes: Routes = [
  {path: '', component: QuestiontypeHomeComponent},
  { path: 'new', component: QuestiontypeNewComponent },
  { path: ':id', component: QuestiontypeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Questiontype-detail-permissions'
      }
    }
  }
];

export const QUESTIONTYPE_MODULE_DECLARATIONS = [
    QuestiontypeHomeComponent,
    QuestiontypeNewComponent,
    QuestiontypeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestiontypeRoutingModule { }