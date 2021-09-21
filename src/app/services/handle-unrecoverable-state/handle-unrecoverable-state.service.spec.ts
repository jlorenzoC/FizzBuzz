import { TestBed } from '@angular/core/testing';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MessageService } from 'primeng/api';
import { HandleUnrecoverableStateService } from './handle-unrecoverable-state.service';

describe('HandleUnrecoverableStateService', () => {
  let service: HandleUnrecoverableStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServiceWorkerModule.register('', { enabled: false })],
      providers: [MessageService],
    });
    service = TestBed.inject(HandleUnrecoverableStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
