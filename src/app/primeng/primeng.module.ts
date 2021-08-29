import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

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
    SkeletonModule,
    SidebarModule,
    ButtonModule,
    SpeedDialModule,
    OverlayPanelModule,
    MessagesModule,
    MessageModule,
  ],
  providers: [MessageService],
})
export class PrimengModule {}
