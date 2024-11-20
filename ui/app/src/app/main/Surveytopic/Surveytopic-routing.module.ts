import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveytopicHomeComponent } from './home/Surveytopic-home.component';
import { SurveytopicNewComponent } from './new/Surveytopic-new.component';
import { SurveytopicDetailComponent } from './detail/Surveytopic-detail.component';

const routes: Routes = [
  {path: '', component: SurveytopicHomeComponent},
  { path: 'new', component: SurveytopicNewComponent },
  { path: ':id', component: SurveytopicDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Surveytopic-detail-permissions'
      }
    }
  }
];

export const SURVEYTOPIC_MODULE_DECLARATIONS = [
    SurveytopicHomeComponent,
    SurveytopicNewComponent,
    SurveytopicDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveytopicRoutingModule { }