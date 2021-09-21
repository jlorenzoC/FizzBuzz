import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StaticResourceService {
  readonly AMOUNT_OF_NUMBERS_TO_PASS_IN_FIZZBUZZ_ALGORITHM = 100;
  readonly GROUP_VIEW = 'grouped';
  readonly INDIVIDUAL_VIEW = 'individual';
}
