import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FizzbuzzPipe } from './pipes/fizzbuzz/fizzbuzz.pipe';
import { PrimengModule } from './primeng/primeng.module';
import { ImageBadgeComponent } from './components/image-badge/image-badge.component';

@NgModule({
  declarations: [AppComponent, FizzbuzzPipe, ImageBadgeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, PrimengModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
