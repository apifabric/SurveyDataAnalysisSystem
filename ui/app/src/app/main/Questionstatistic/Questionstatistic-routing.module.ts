import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionstatisticHomeComponent } from './home/Questionstatistic-home.component';
import { QuestionstatisticNewComponent } from './new/Questionstatistic-new.component';
import { QuestionstatisticDetailComponent } from './detail/Questionstatistic-detail.component';

const routes: Routes = [
  {path: '', component: QuestionstatisticHomeComponent},
  { path: 'new', component: QuestionstatisticNewComponent },
  { path: ':id', component: QuestionstatisticDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Questionstatistic-detail-permissions'
      }
    }
  }
];

export const QUESTIONSTATISTIC_MODULE_DECLARATIONS = [
    QuestionstatisticHomeComponent,
    QuestionstatisticNewComponent,
    QuestionstatisticDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionstatisticRoutingModule { }