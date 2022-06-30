import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { hideShow } from './animations';
import { CheckStore } from './models/CheckStore';
import { FilteredElements } from './models/FilteredElements';
import { HandleUnrecoverableStateService } from './services/handle-unrecoverable-state/handle-unrecoverable-state.service';
import { StaticResourceService } from './services/static-resource/static-resource.service';

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
  filteredElements?: FilteredElements;
  numbersToProcessByFzBzPipe: number[] = [];

  @HostListener('window:scroll', ['$event.target']) onScroll(): void {
    const yScrollPosition = this.viewPortScroller.getScrollPosition()[1];
    if (yScrollPosition >= 100) this.displayTopBar = true;
    else this.displayTopBar = false;
  }

  constructor(
    private primengConfig: PrimeNGConfig,
    private handleUnrecoverableStateService: HandleUnrecoverableStateService,
    private viewPortScroller: ViewportScroller,
    public staticResource: StaticResourceService
  ) {
    this.mockCards = new Array<number>(
      this.staticResource.AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM
    );
    this.subscription = interval(2)
      .pipe(
        take(
          this.staticResource.AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM
        )
      )
      .subscribe(this.setCollection);
    this.items = [
      {
        icon: 'pi pi-id-card',
        command: () => this.toggleView(this.staticResource.GROUP_VIEW),
      },
      {
        icon: 'pi pi-table',
        command: () => this.toggleView(this.staticResource.INDIVIDUAL_VIEW),
      },
    ];
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  areAllTheNumbersProcessed(): boolean {
    return (
      this.numbersToProcessByFzBzPipe.length ===
      this.staticResource.AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM
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
    this.isGroupedCardViewActivated = view === this.staticResource.GROUP_VIEW;
    this.isIndividualCardViewActivated =
      view === this.staticResource.INDIVIDUAL_VIEW;
    this.filter();
  }

  isEvenNumber(numb: number): boolean {
    return numb % 2 === 0;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
}
