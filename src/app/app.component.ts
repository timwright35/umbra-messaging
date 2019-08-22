import { Component } from '@angular/core';
import { UmbraToastService } from 'umbra-messaging';

@Component({
  selector: 'umbra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private umbraToastService: UmbraToastService) {}

  showToast() {
    this.umbraToastService.showToast({
      text: 'Toast message',
      type: 'success',
    });
  }
}
