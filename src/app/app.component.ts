import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('hideFilterCard', [
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      transition('* => *', animate(150)),
    ]),
  ],
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
      this.filterInTopbar?.focus();
    } else {
      this.displayTopBar = false;
      this.filterOutOfTopbar?.focus();
    }
  }

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
