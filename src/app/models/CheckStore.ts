export class CheckStore {
  public get fizzBuzzIsChecked() {
    return this._fizzBuzzIsChecked;
  }
  public set fizzBuzzIsChecked(value) {
    this._fizzBuzzIsChecked = value;
  }
  public get buzzIsChecked() {
    return this._buzzIsChecked;
  }
  public set buzzIsChecked(value) {
    this._buzzIsChecked = value;
  }
  public get fizzIsChecked() {
    return this._fizzIsChecked;
  }
  public set fizzIsChecked(value) {
    this._fizzIsChecked = value;
  }
  public get allIsChecked() {
    return this._allIsChecked;
  }
  public set allIsChecked(value) {
    this._allIsChecked = value;
  }
  constructor(
    private _allIsChecked = true,
    private _fizzIsChecked = false,
    private _buzzIsChecked = false,
    private _fizzBuzzIsChecked = false
  ) {}

  onClickAll(): boolean {
    if (!this.allIsChecked) {
      this.fizzIsChecked = false;
      this.buzzIsChecked = false;
      this.fizzBuzzIsChecked = false;
    }
    return (this.allIsChecked = true);
  }
  onClickFizz(): boolean {
    if (!this.fizzIsChecked) this.allIsChecked = false;
    this.fizzIsChecked = !this.fizzIsChecked;
    this.checkDefaultAll();
    return this.fizzIsChecked;
  }
  onClickBuzz(): boolean {
    if (!this.buzzIsChecked) this.allIsChecked = false;
    this.buzzIsChecked = !this.buzzIsChecked;
    this.checkDefaultAll();
    return this.buzzIsChecked;
  }
  onClickFizzBuzz(): boolean {
    if (!this.fizzBuzzIsChecked) this.allIsChecked = false;
    this.fizzBuzzIsChecked = !this.fizzBuzzIsChecked;
    this.checkDefaultAll();
    return this.fizzBuzzIsChecked;
  }

  checkDefaultAll() {
    this.allIsChecked =
      !this.fizzBuzzIsChecked && !this.buzzIsChecked && !this.fizzIsChecked;
  }

  unCheckGroupAll(): CheckStore {
    this.allIsChecked = true;
    return new CheckStore(true);
  }
}
