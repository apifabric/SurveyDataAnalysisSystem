import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicHomeComponent } from './home/Topic-home.component';
import { TopicNewComponent } from './new/Topic-new.component';
import { TopicDetailComponent } from './detail/Topic-detail.component';

const routes: Routes = [
  {path: '', component: TopicHomeComponent},
  { path: 'new', component: TopicNewComponent },
  { path: ':id', component: TopicDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Topic-detail-permissions'
      }
    }
  },{
    path: ':topic_id/Surveytopic', loadChildren: () => import('../Surveytopic/Surveytopic.module').then(m => m.SurveytopicModule),
    data: {
        oPermission: {
            permissionId: 'Surveytopic-detail-permissions'
        }
    }
}
];

export const TOPIC_MODULE_DECLARATIONS = [
    TopicHomeComponent,
    TopicNewComponent,
    TopicDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicRoutingModule { }