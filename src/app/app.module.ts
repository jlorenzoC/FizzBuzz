import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ImageBadgeComponent } from './components/image-badge/image-badge.component';
import { SkeletonFzbzCardComponent } from './components/skeleton-fzbz-card/skeleton-fzbz-card.component';
import { SkeletonFzbzFilterCardComponent } from './components/skeleton-fzbz-filter-card/skeleton-fzbz-filter-card.component';
import { FizzbuzzPipe } from './pipes/fizzbuzz/fizzbuzz.pipe';
import { PrimengModule } from './primeng/primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzPipe,
    ImageBadgeComponent,
    SkeletonFzbzCardComponent,
    SkeletonFzbzFilterCardComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, PrimengModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
