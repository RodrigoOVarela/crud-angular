import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CronEditorModule } from 'ngx-cron-editor';

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
    FormsModule,
    ReactiveFormsModule,
    CronEditorModule,
  ]
})
export class CronModule { }
