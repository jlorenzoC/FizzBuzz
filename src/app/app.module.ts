import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SidebarModule } from 'primeng/sidebar';
import { SpeedDialModule } from 'primeng/speeddial';
import { TagModule } from 'primeng/tag';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { GroupedInfoComponent } from './components/grouped-info/grouped-info.component';
import { ImageBadgeComponent } from './components/image-badge/image-badge.component';
import { SkeletonFzbzCardComponent } from './components/skeleton-fzbz-card/skeleton-fzbz-card.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FizzbuzzPipe } from './pipes/fizzbuzz/fizzbuzz.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzPipe,
    ImageBadgeComponent,
    GroupedInfoComponent,
    SkeletonFzbzCardComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    TagModule,
    CardModule,
    SidebarModule,
    MessagesModule,
    ScrollTopModule,
    SpeedDialModule,
    DashboardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
