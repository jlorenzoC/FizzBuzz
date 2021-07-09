import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fizzbuzz';
  collection: number[] = [];

  constructor() {
    interval(500).pipe(take(100)).subscribe(val =>
      this.collection.push(val + 1)
    )
  }
}
