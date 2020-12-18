import { TabsPageModule } from './pages/tabs/tabs.module';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'regiser',
    loadChildren: () => import('./pages/regiser/regiser.module').then( m => m.RegiserPageModule)
  },
  {
    path: 'forgot-pass',
    loadChildren: () => import('./pages/forgot-pass/forgot-pass.module').then( m => m.ForgotPassPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
