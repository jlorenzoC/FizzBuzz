import { CheckStore } from './CheckStore';

export class FilteredElements {
  constructor(
    private _filteredElements: number[] = [],
    private checkStore: CheckStore = new CheckStore()
  ) {}

  get allElements(): number[] {
    return this.checkStore.allIsChecked ? this._filteredElements : [];
  }

  get buzzElements(): number[] {
    return this.checkStore.buzzIsChecked ? this.filterBuzz() : [];
  }

  get concatAllByCheckStoreStatus(): number[] {
    return this.allElements.concat(
      this.fizzElements,
      this.buzzElements,
      this.fizzbuzzElements
    );
  }

  concatAllByCriteria(criteria: string): number[] {
    return this.concatAllByCheckStoreStatus.filter((e: number) =>
      e.toString().includes(criteria.trim())
    );
  }

  get fizzElements(): number[] {
    return this.checkStore.fizzIsChecked ? this.filterFizz() : [];
  }

  get fizzbuzzElements(): number[] {
    return this.checkStore.fizzBuzzIsChecked ? this.filterFizzBuzz() : [];
  }

  get groupedElements(): Array<[string, number[]]> {
    let groupedElements: Map<string, number[]> = new Map();
    if (this.checkStore.allIsChecked) {
      return [...this.getGroupedMap];
    }
    if (this.checkStore.fizzIsChecked)
      groupedElements.set('Fizz', this.filterFizz());
    if (this.checkStore.buzzIsChecked)
      groupedElements.set('Buzz', this.filterBuzz());
    if (this.checkStore.fizzBuzzIsChecked)
      groupedElements.set('FizzBuzz', this.filterFizzBuzz());
    return [...groupedElements];
  }

  get none(): number[] {
    return this.checkStore.allIsChecked ? this.filterNonFizzBuzzTyped() : [];
  }

  private concatAllTypedElementsToDoGrouping() {
    return this.filterFizz().concat(this.filterBuzz(), this.filterFizzBuzz());
  }

  private filterBuzz(): number[] {
    return this._filteredElements?.filter(
      (e) => e % 5 === 0 && !this.filterFizzBuzz().includes(e)
    );
  }

  private filterFizz(): number[] {
    return this._filteredElements?.filter(
      (e) => e % 3 === 0 && !this.filterFizzBuzz().includes(e)
    );
  }

  private filterFizzBuzz(): number[] {
    return this._filteredElements?.filter((e) => e % 3 === 0 && e % 5 === 0);
  }

  private filterNonFizzBuzzTyped() {
    return this._filteredElements.filter(
      (e) => !this.isInTheFizzBuzzElementsArrays(e)
    );
  }

  private get getGroupedMap(): Map<string, number[]> {
    let groupedElements: Map<string, number[]> = new Map();
    groupedElements.set('Fizz', this.filterFizz());
    groupedElements.set('Buzz', this.filterBuzz());
    groupedElements.set('FizzBuzz', this.filterFizzBuzz());
    groupedElements.set('They are not', this.filterNonFizzBuzzTyped());
    return groupedElements;
  }

  private isInTheFizzBuzzElementsArrays(e: number): boolean {
    return this.concatAllTypedElementsToDoGrouping().includes(e);
  }
}
