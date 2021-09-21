import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import { AreAllTheNumbersProcessedPipe } from './../pipes/are-all-the-numbers-processed/are-all-the-numbers-processed.pipe';
import { ToStringPipe } from './../pipes/to-string/to-string.pipe';
import { DashboardInsideSidebarComponent } from './component/dashboard-inside-sidebar/dashboard-inside-sidebar.component';
import { FzbzStatisticAreaComponent } from './component/fzbz-statistic-area/fzbz-statistic-area.component';
import { InputSearchByNumberComponent } from './component/input-search-by-number/input-search-by-number.component';
import { ViewSwitcherComponent } from './component/view-switcher/view-switcher.component';

@NgModule({
  declarations: [
    ToStringPipe,
    ViewSwitcherComponent,
    ViewSwitcherComponent,
    FzbzStatisticAreaComponent,
    InputSearchByNumberComponent,
    AreAllTheNumbersProcessedPipe,
    DashboardInsideSidebarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BadgeModule,
    ButtonModule,
    TooltipModule,
    SkeletonModule,
    KeyFilterModule,
    InputTextModule,
    OverlayPanelModule,
  ],
  exports: [
    BadgeModule,
    ToStringPipe,
    SkeletonModule,
    ViewSwitcherComponent,
    InputSearchByNumberComponent,
    AreAllTheNumbersProcessedPipe,
    DashboardInsideSidebarComponent,
  ],
})
export class DashboardModule {}
