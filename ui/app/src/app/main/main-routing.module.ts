import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Choice', loadChildren: () => import('./Choice/Choice.module').then(m => m.ChoiceModule) },
    
        { path: 'Question', loadChildren: () => import('./Question/Question.module').then(m => m.QuestionModule) },
    
        { path: 'Questionstatistic', loadChildren: () => import('./Questionstatistic/Questionstatistic.module').then(m => m.QuestionstatisticModule) },
    
        { path: 'Questiontype', loadChildren: () => import('./Questiontype/Questiontype.module').then(m => m.QuestiontypeModule) },
    
        { path: 'Respondent', loadChildren: () => import('./Respondent/Respondent.module').then(m => m.RespondentModule) },
    
        { path: 'Respondentactivity', loadChildren: () => import('./Respondentactivity/Respondentactivity.module').then(m => m.RespondentactivityModule) },
    
        { path: 'Response', loadChildren: () => import('./Response/Response.module').then(m => m.ResponseModule) },
    
        { path: 'Survey', loadChildren: () => import('./Survey/Survey.module').then(m => m.SurveyModule) },
    
        { path: 'Surveyresponsesummary', loadChildren: () => import('./Surveyresponsesummary/Surveyresponsesummary.module').then(m => m.SurveyresponsesummaryModule) },
    
        { path: 'Surveystatistic', loadChildren: () => import('./Surveystatistic/Surveystatistic.module').then(m => m.SurveystatisticModule) },
    
        { path: 'Surveytopic', loadChildren: () => import('./Surveytopic/Surveytopic.module').then(m => m.SurveytopicModule) },
    
        { path: 'Topic', loadChildren: () => import('./Topic/Topic.module').then(m => m.TopicModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }