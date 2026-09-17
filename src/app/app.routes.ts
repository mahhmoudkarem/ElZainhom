import { Routes } from '@angular/router';

import { Welcome } from './pages/welcome/welcome';
import { Home } from './pages/home/home';
import { Chicken } from './pages/chicken/chicken';
import { Chicks } from './pages/chicks/chicks';
import { Feed } from './pages/feed/feed';
import { Medicines } from './pages/medicines/medicines';
import { NotFound } from './pages/not-found/not-found';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { ComparePrices } from './pages/compare-prices/compare-prices';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },

  {
    path: 'welcome',
    component: Welcome
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'chicks',
    component: Chicks
  },

  {
    path: 'chicken',
    component: Chicken
  },

  {
    path: 'medicines',
    component: Medicines
  },

  {
    path: 'feed',
    component: Feed
  },

  {
    path: 'about',
    component: About
  },

  {
    path: 'compare-prices',
    component: ComparePrices
  },

  {
    path: 'contact',
    component: Contact
  },

  {
    path: '**',
    component: NotFound
  }

];