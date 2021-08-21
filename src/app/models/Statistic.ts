export class Statistic {
  constructor(private _filteredElements: number[] = []) {}

  get filteredElements(): number {
    return this._filteredElements.length;
  }

  get fizzElements(): number {
    return (
      this._filteredElements?.filter((e) => e % 3 === 0).length -
      this.fizzbuzzElements
    );
  }
  get buzzElements(): number {
    return (
      this._filteredElements?.filter((e) => e % 5 === 0).length -
      this.fizzbuzzElements
    );
  }
  get fizzbuzzElements(): number {
    return this._filteredElements?.filter((e) => e % 3 === 0 && e % 5 === 0)
      .length;
  }
}
