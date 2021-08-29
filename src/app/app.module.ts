import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { GroupedInfoComponent } from './components/grouped-info/grouped-info.component';
import { FzbzStatisticAreaComponent } from './components/fzbz-statistic-area/fzbz-statistic-area.component';
import { GroupedInfoComponent } from './components/grouped-info/grouped-info.component';
import { ImageBadgeComponent } from './components/image-badge/image-badge.component';
import { InputSearchByNumberComponent } from './components/input-search-by-number/input-search-by-number.component';
import { SkeletonFzbzCardComponent } from './components/skeleton-fzbz-card/skeleton-fzbz-card.component';
import { FizzbuzzPipe } from './pipes/fizzbuzz/fizzbuzz.pipe';
import { PrimengModule } from './primeng/primeng.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzPipe,
    ImageBadgeComponent,
    SkeletonFzbzCardComponent,
    InputSearchByNumberComponent,
    FzbzStatisticAreaComponent,
    GroupedInfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PrimengModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
