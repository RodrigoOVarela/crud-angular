import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CronRoutingModule } from './cron-routing.module';
import { CronComponent } from './list/cron.component';


@NgModule({
  declarations: [
    CronComponent,
  ],
  imports: [
    CommonModule,
    CronRoutingModule,
    AppMaterialModule,
    SharedModule,
  ]
})
export class CronModule { }
