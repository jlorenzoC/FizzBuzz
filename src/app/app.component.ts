import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'FizzBuzz';
  subscription: Subscription;
  cardsFiltered: number[] = [];
  numbersToProcessByFzBzPipe: number[] = [];
  readonly AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM = 100;

  constructor(private primengConfig: PrimeNGConfig) {
    this.subscription = interval(50)
      .pipe(take(this.AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM))
      .subscribe(this.setCollection);
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  filter(value: string): void {
    const filterCriteria = value.trim();
    if (filterCriteria) this.cardsFiltered = this.filterCollection(value);
    else this.assignOriginalCollection();
  }

  private assignOriginalCollection(): void {
    this.cardsFiltered = this.numbersToProcessByFzBzPipe;
  }

  private filterCollection(valueCriteria: string): number[] {
    return this.numbersToProcessByFzBzPipe.filter((ele) =>
      ele.toString().includes(valueCriteria.trim())
    );
  }

  private setCollection = (val: number) => {
    this.numbersToProcessByFzBzPipe.push(val + 1);
    this.cardsFiltered = this.numbersToProcessByFzBzPipe.slice();
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
