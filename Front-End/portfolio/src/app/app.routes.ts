
import { Routes } from '@angular/router';
import {Hero} from './components/hero/hero';
import {Projects} from './components/projects/projects';
import {Skills} from './components/skills/skills';
import {Contact} from './components/contact/contact'
import {Navbar} from './components/navbar/navbar';

export const routes: Routes = [
    {path: '', component: Hero},
    {path: 'projects', component: Projects},
    {path: 'skills', component: Skills},
    {path: 'contact', component: Contact},
    {path: 'navbar', component: Navbar}
];


