import { Routes } from '@angular/router';
import { MainPage } from './routes/main-page/main-page';
import { About } from './routes/about/about';
import { Experience } from './routes/experience/experience';
import { Projects } from './routes/projects/projects';
import { Skills } from './routes/skills/skills';
import { Education } from './routes/education/education';
import { Contact } from './routes/contact/contact';


export const routes: Routes = [
    { path: '', component: MainPage },
    { path: 'about', component: About },
    { path: 'experience', component: Experience },
    { path: 'projects', component: Projects },
    { path: 'skills', component: Skills },
    { path: 'education', component: Education },
    { path: 'contact', component: Contact },
];
