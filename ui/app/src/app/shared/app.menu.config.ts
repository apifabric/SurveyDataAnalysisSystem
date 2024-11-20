import { MenuRootItem } from 'ontimize-web-ngx';

import { ChoiceCardComponent } from './Choice-card/Choice-card.component';

import { QuestionCardComponent } from './Question-card/Question-card.component';

import { QuestionstatisticCardComponent } from './Questionstatistic-card/Questionstatistic-card.component';

import { QuestiontypeCardComponent } from './Questiontype-card/Questiontype-card.component';

import { RespondentCardComponent } from './Respondent-card/Respondent-card.component';

import { RespondentactivityCardComponent } from './Respondentactivity-card/Respondentactivity-card.component';

import { ResponseCardComponent } from './Response-card/Response-card.component';

import { SurveyCardComponent } from './Survey-card/Survey-card.component';

import { SurveyresponsesummaryCardComponent } from './Surveyresponsesummary-card/Surveyresponsesummary-card.component';

import { SurveystatisticCardComponent } from './Surveystatistic-card/Surveystatistic-card.component';

import { SurveytopicCardComponent } from './Surveytopic-card/Surveytopic-card.component';

import { TopicCardComponent } from './Topic-card/Topic-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Choice', name: 'CHOICE', icon: 'view_list', route: '/main/Choice' }
    
        ,{ id: 'Question', name: 'QUESTION', icon: 'view_list', route: '/main/Question' }
    
        ,{ id: 'Questionstatistic', name: 'QUESTIONSTATISTIC', icon: 'view_list', route: '/main/Questionstatistic' }
    
        ,{ id: 'Questiontype', name: 'QUESTIONTYPE', icon: 'view_list', route: '/main/Questiontype' }
    
        ,{ id: 'Respondent', name: 'RESPONDENT', icon: 'view_list', route: '/main/Respondent' }
    
        ,{ id: 'Respondentactivity', name: 'RESPONDENTACTIVITY', icon: 'view_list', route: '/main/Respondentactivity' }
    
        ,{ id: 'Response', name: 'RESPONSE', icon: 'view_list', route: '/main/Response' }
    
        ,{ id: 'Survey', name: 'SURVEY', icon: 'view_list', route: '/main/Survey' }
    
        ,{ id: 'Surveyresponsesummary', name: 'SURVEYRESPONSESUMMARY', icon: 'view_list', route: '/main/Surveyresponsesummary' }
    
        ,{ id: 'Surveystatistic', name: 'SURVEYSTATISTIC', icon: 'view_list', route: '/main/Surveystatistic' }
    
        ,{ id: 'Surveytopic', name: 'SURVEYTOPIC', icon: 'view_list', route: '/main/Surveytopic' }
    
        ,{ id: 'Topic', name: 'TOPIC', icon: 'view_list', route: '/main/Topic' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    ChoiceCardComponent

    ,QuestionCardComponent

    ,QuestionstatisticCardComponent

    ,QuestiontypeCardComponent

    ,RespondentCardComponent

    ,RespondentactivityCardComponent

    ,ResponseCardComponent

    ,SurveyCardComponent

    ,SurveyresponsesummaryCardComponent

    ,SurveystatisticCardComponent

    ,SurveytopicCardComponent

    ,TopicCardComponent

];