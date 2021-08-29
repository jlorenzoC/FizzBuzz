import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class HandleUnrecoverableStateService {
  constructor(updates: SwUpdate, private messageService: MessageService) {
    updates.unrecoverable.subscribe(() => {
      this.messageService.add({
        severity: 'error',
        detail:
          'An error occurred that we cannot recover from. Please reload the page.',
      });
    });
  }
}
