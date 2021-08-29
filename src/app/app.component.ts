import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { hideShow } from './animations';
import { CheckStore } from './models/CheckStore';
import { FilteredElements } from './models/FilteredElements';
import { HandleUnrecoverableStateService } from './services/handle-unrecoverable-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [hideShow],
})
export class AppComponent implements OnInit, OnDestroy {
  filterValue = '';
  title = 'FizzBuzz';
  items: MenuItem[];
  mockCards: number[];
  displayTopBar = false;
  subscription: Subscription;
  cardsFiltered: number[] = [];
  checkStore = new CheckStore();
  isGroupedCardViewActivated = false;
  isIndividualCardViewActivated = true;
  groupedCards?: [string, number[]][];
  innerTopbarFilter?: HTMLElement | null;
  outOfTopbarFilter?: HTMLElement | null;
  filteredElements?: FilteredElements;
  numbersToProcessByFzBzPipe: number[] = [];
  readonly AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM = 100;

  @HostListener('window:scroll', ['$event.target']) onScroll(
    document: Document
  ): void {
    this.innerTopbarFilter = document.getElementById(
      'fzbz-topbar-input-filter'
    );
    this.outOfTopbarFilter = document.getElementById('fzbz-input-filter');
    const yPosition = document.documentElement.scrollTop;
    if (yPosition >= 100) this.displayTopBar = true;
    else this.displayTopBar = false;
  }

  constructor(
    private primengConfig: PrimeNGConfig,
    private handleUnrecoverableStateService: HandleUnrecoverableStateService
  ) {
    this.mockCards = new Array<number>(
      this.AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM
    );
    this.subscription = interval(2)
      .pipe(take(this.AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM))
      .subscribe(this.setCollection);
    this.items = [
      {
        icon: 'pi pi-id-card',
        command: () => this.toggleView('groupedCardView'),
      },
      {
        icon: 'pi pi-table',
        command: () => this.toggleView(),
      },
    ];
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  areAllTheNumbersProcessed(): boolean {
    return (
      this.numbersToProcessByFzBzPipe.length ===
      this.AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM
    );
  }

  filter(checkStore: CheckStore = this.checkStore) {
    this.filteredElements = this.getNewFilteredElements(checkStore);
    this.cardsFiltered = this.filteredElements.concatAllByCriteria(
      this.filterValue
    );
    this.groupedCards = this.filteredElements.groupedElements;
  }

  onInput(input: HTMLInputElement): void {
    this.validateInputNotToBeZero(input);
    this.filter();
  }

  toggleView(view?: string) {
    this.isGroupedCardViewActivated = view === 'grouped';
    this.isIndividualCardViewActivated = view === 'individual';
    this.filter();
  }

  private getNewFilteredElements(
    checkStore: CheckStore = this.checkStore
  ): FilteredElements {
    return new FilteredElements(
      this.numbersToProcessByFzBzPipe.slice(),
      checkStore
    );
  }

  private setCollection = (val: number) => {
    this.numbersToProcessByFzBzPipe.push(val + 1);
    this.cardsFiltered = this.numbersToProcessByFzBzPipe.slice();
  };

  private validateInputNotToBeZero(input: HTMLInputElement): string {
    const indexOfZero = input.value.trim().indexOf('0');
    if (indexOfZero === 0) return (this.filterValue = input.value = '');
    return (this.filterValue = input.value.trim());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
