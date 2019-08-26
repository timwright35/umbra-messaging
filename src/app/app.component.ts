import { Component } from '@angular/core';
import { defaultToastConfig } from 'lib/lib/shared/classes/toast-config';
import { UmbraToastService } from 'lib/lib/shared/services/umbra-toast.service';

@Component({
  selector: 'umbra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private umbraToastService: UmbraToastService) {}

  showWarningToast() {
    this.umbraToastService.showToast(Object.assign({}, defaultToastConfig, {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      position: {
        top: 50
      },
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
}
