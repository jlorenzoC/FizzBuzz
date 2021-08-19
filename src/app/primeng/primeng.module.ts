import { NgModule } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ScrollTopModule } from 'primeng/scrolltop';

@NgModule({
  exports: [
    TableModule,
    CardModule,
    InputTextModule,
    TagModule,
    BadgeModule,
    TooltipModule,
    KeyFilterModule,
    ScrollTopModule,
  ],
})
export class PrimengModule {}
