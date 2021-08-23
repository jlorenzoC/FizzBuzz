import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { hideShow } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [hideShow],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'FizzBuzz';
  displayTopBar = false;
  subscription: Subscription;
  cardsFiltered: number[] = [];
  numbersToProcessByFzBzPipe: number[] = [];
  readonly AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM = 100;
  filterValue!: number;
  filterInTopbar!: HTMLElement | null;
  filterOutOfTopbar!: HTMLElement | null;

  @HostListener('window:scroll', ['$event.target']) onScroll(
    document: Document
  ): void {
    this.filterInTopbar = document.getElementById('fzbz-topbar-input-filter');
    this.filterOutOfTopbar = document.getElementById('fzbz-input-filter');
    const yPosition = document.documentElement.scrollTop;

    if (yPosition >= 100) {
      this.displayTopBar = true;
    } else {
      this.displayTopBar = false;
    }
  }

  constructor(private primengConfig: PrimeNGConfig) {
    this.subscription = interval(2)
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

  areThereAllTheNumbersToProcess(): boolean {
    return (
      this.numbersToProcessByFzBzPipe.length ===
      this.AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM
    );
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
