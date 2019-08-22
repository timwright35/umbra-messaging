import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  OnDestroy
} from '@angular/core';
import {
  TOAST_CONFIG_TOKEN,
  ToastData
} from '../shared/classes/toast-config';
import { ToastRef } from '../shared/classes/toast-ref';
import { ToastConfigInterface } from '../shared/interfaces/toast-config.interface';
import {
  toastAnimations,
  ToastAnimationState
} from '../shared/animations/toast-fade.animation';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'umbra-messaging-toast',
  templateUrl: './umbra-toast.component.html',
  styleUrls: ['./umbra-toast.component.css'],
  animations: [toastAnimations.fadeToast],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UmbraToastComponent implements OnInit, OnDestroy {
  animationState: ToastAnimationState = 'default';
  iconType: string;

  private intervalId: number;

  constructor(
      readonly data: ToastData,
      readonly ref: ToastRef
  ) {
    this.iconType = data.type === 'success' ? 'done' : data.type;
  }

  ngOnInit() {
    this.intervalId = setTimeout(() => this.animationState = 'closing', 5000);
  }

  ngOnDestroy() {
    clearTimeout(this.intervalId);
  }

  close() {
    this.ref.close();
  }

  onFadeFinished(event: AnimationEvent) {
    const { toState } = event;
    const isFadeOut = (toState as ToastAnimationState) === 'closing';
    const itFinished = this.animationState === 'closing';

    if (isFadeOut && itFinished) {
      this.close();
    }
  }
}
