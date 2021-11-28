import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CronComponent } from './list/cron.component';

const routes: Routes = [
  { path: '', component: CronComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CronRoutingModule { }
