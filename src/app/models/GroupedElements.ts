import { CheckStore } from './CheckStore';

export class GroupedElements {
  constructor(
    private _filteredElements: number[] = [],
    private checkStore: CheckStore = new CheckStore()
  ) {}

  get allElements(): number[] {
    return this.checkStore.allIsChecked ? this._filteredElements : [];
  }

  get fizzElements(): number[] {
    return this.checkStore.fizzIsChecked ? this.filterFizz() : [];
  }

  get buzzElements(): number[] {
    return this.checkStore.buzzIsChecked ? this.filterBuzz() : [];
  }

  get fizzbuzzElements(): number[] {
    return this.checkStore.fizzBuzzIsChecked ? this.filterFizzBuzz() : [];
  }

  get none(): number[] {
    return this.checkStore.allIsChecked ? this.filterNonFizzBuzzTyped() : [];
  }

  get concatAll(): number[] {
    return this.allElements.concat(
      this.fizzElements,
      this.buzzElements,
      this.fizzbuzzElements
    );
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

  private get getGroupedMap(): Map<string, number[]> {
    let groupedElements: Map<string, number[]> = new Map();
    groupedElements.set('Fizz', this.filterFizz());
    groupedElements.set('Buzz', this.filterBuzz());
    groupedElements.set('FizzBuzz', this.filterFizzBuzz());
    groupedElements.set('They are not', this.filterNonFizzBuzzTyped());
    return groupedElements;
  }

  private filterFizz(): number[] {
    return this._filteredElements?.filter(
      (e) => e % 3 === 0 && !this.filterFizzBuzz().includes(e)
    );
  }

  private filterBuzz(): number[] {
    return this._filteredElements?.filter(
      (e) => e % 5 === 0 && !this.filterFizzBuzz().includes(e)
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

  private concatAllTypedElementsToDoGrouping() {
    return this.filterFizz().concat(this.filterBuzz(), this.filterFizzBuzz());
  }

  private isInTheFizzBuzzElementsArrays(e: number): boolean {
    return this.concatAllTypedElementsToDoGrouping().includes(e);
  }
}
