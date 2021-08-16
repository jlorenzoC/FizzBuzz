import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'FizzBuzz';
  queryValue!: string;
  subscription: Subscription;
  collection: number[] = [];
  temporalCollection: number[] = [];
  readonly AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM = 100;

  constructor(private primengConfig: PrimeNGConfig) {
    this.subscription = interval(50)
      .pipe(take(this.AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM))
      .subscribe(this.setCollection);
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  filter(value: string) {
    const filterCriteria = value.trim();
    if (filterCriteria) this.temporalCollection = this.filterCollection(value);
    else this.assignOriginalCollection();
  }

  private assignOriginalCollection(): void {
    this.temporalCollection = this.collection;
  }

  private filterCollection(valueCriteria: string): number[] {
    return this.collection.filter((ele) =>
      ele.toString().includes(valueCriteria.trim())
    );
  }

  private setCollection = (val: number) => {
    this.collection.push(val + 1);
    this.temporalCollection = this.collection.slice();
  };
}
