import { Component } from '@angular/core';
import { defaultToastConfig } from 'lib/lib/shared/classes/toast-config';
import { UmbraToastService } from 'lib/lib/shared/services/umbra-toast.service';
import { InlineMessage } from 'umbra-messaging/lib/shared/classes/inline-message';

@Component({
  selector: 'umbra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  umbraMessages: Array<InlineMessage> = [];

  constructor(private umbraToastService: UmbraToastService) {
    this.umbraMessages.push({
      title: 'Success',
      summary: 'You did it!',
      type: 'success',
      icon: 'home',
      timeout: 3000
    });
    this.umbraMessages.push({
      title: 'Error',
      summary: 'It all fail apart!',
      type: 'error',
      icon: 'home'
    });
    this.umbraMessages.push({
      title: 'Warning',
      summary: 'You are on the edge!',
      type: 'warning',
      icon: 'home'
    });
    this.umbraMessages.push({
      title: 'info',
      summary: 'This is a neutral message.',
      type: 'info',
      icon: 'home'
    });
  }

  showWarningToast() {
    this.umbraToastService.showToast(Object.assign({}, defaultToastConfig, {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      position: {
        top: 50
      },
      closable: false,
      toastData: {
        text: 'Oh no! There was an error in the system!',
        type: 'warning',
      }
    }));
  }

  showInfoToast() {
    this.umbraToastService.showToast(Object.assign({}, defaultToastConfig, {
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      timeout: 5000,
      toastData: {
        text: 'Just wanted to inform you there is a wall there.',
        type: 'info',
      }
    }));
  }

  showSuccessToast() {
    this.umbraToastService.showToast(Object.assign({}, defaultToastConfig, {
      verticalPosition: 'top',
      horizontalPosition: 'left',
      toastData: {
        text: 'We did it!',
        type: 'success',
      }
    }));
  }

  closeAll() {
    this.umbraToastService.closeAllToasts();
  }
}
