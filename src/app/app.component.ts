import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { hideShow } from './animations';
import { CheckStore } from './models/CheckStore';
import { GroupedElements } from './models/GroupedElements';
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
  items!: MenuItem[];
  displayTopBar = false;
  subscription: Subscription;
  cardsFiltered: number[] = [];
  checkStore = new CheckStore();
  isGroupedCardViewActivated = false;
  isIndividualCardViewActivated = true;
  groupedCards!: [string, number[]][];
  filterInTopbar!: HTMLElement | null;
  filterOutOfTopbar!: HTMLElement | null;
  groupedAndFilteredInfo!: GroupedElements;
  numbersToProcessByFzBzPipe: number[] = [];
  readonly AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM = 100;

  @HostListener('window:scroll', ['$event.target']) onScroll(
    document: Document
  ): void {
    this.filterInTopbar = document.getElementById('fzbz-topbar-input-filter');
    this.filterOutOfTopbar = document.getElementById('fzbz-input-filter');
    const yPosition = document.documentElement.scrollTop;
    if (yPosition >= 100) this.displayTopBar = true;
    else this.displayTopBar = false;
  }

  constructor(
    private primengConfig: PrimeNGConfig,
    private handleUnrecoverableStateService: HandleUnrecoverableStateService
  ) {
    this.subscription = interval(2)
      .pipe(take(this.AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM))
      .subscribe(this.setCollection);
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      {
        icon: 'pi pi-id-card',
        command: () => this.toggleViews('groupedCardView'),
      },
      {
        icon: 'pi pi-table',
        command: () => this.toggleViews(),
      },
    ];
  }

  onInputfilter(input: HTMLInputElement): void {
    const filterCriteria = this.setInputValue(input);
    this.filterCardsByFilterCriteria(filterCriteria);
  }

  areThereAllTheNumbersToProcess(): boolean {
    return (
      this.numbersToProcessByFzBzPipe.length ===
      this.AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM
    );
  }

  groupFilteredInfo(checkStore: CheckStore) {
    this.groupedAndFilteredInfo = new GroupedElements(
      this.numbersToProcessByFzBzPipe.slice(),
      checkStore
    );
    this.cardsFiltered = this.groupedAndFilteredInfo.concatAll.filter((e) =>
      e.toString().includes(this.filterValue)
    );
    this.groupedCards = this.groupedAndFilteredInfo.groupedElements;
    if (this.filterValue && this.checkStore.allIsChecked)
      this.filterCardsByFilterCriteria(this.filterValue);
  }

  toggleViews(view?: string) {
    if (view === 'groupedCardView') {
      this.isGroupedCardViewActivated = true;
      this.isIndividualCardViewActivated = false;
    } else {
      this.isGroupedCardViewActivated = false;
      this.isIndividualCardViewActivated = true;
    }
    this.groupFilteredInfo(this.checkStore);
  }

  private filterCardsByFilterCriteria(filterCriteria: string) {
    if (filterCriteria)
      this.cardsFiltered = this.filterCollection(filterCriteria);
    else this.assignOriginalCollection();
  }

  private assignOriginalCollection(): void {
    this.checkStore = new CheckStore(true);
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

  private setInputValue(input: HTMLInputElement): string {
    const indexOfZero = input.value.trim().indexOf('0');
    if (indexOfZero === 0) return (this.filterValue = input.value = '');
    return (this.filterValue = input.value.trim());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
