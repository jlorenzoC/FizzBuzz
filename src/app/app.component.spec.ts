import { AreAllTheNumbersProcessedPipe } from './pipes/are-all-the-numbers-processed/are-all-the-numbers-processed.pipe';
import { TestBed } from '@angular/core/testing';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MessageService } from 'primeng/api';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, AreAllTheNumbersProcessedPipe],
      imports: [ServiceWorkerModule.register('', { enabled: false })],
      providers: [MessageService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FizzBuzz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FizzBuzz');
  });
});
