import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { InlineMessage } from 'lib/lib/shared/classes/inline-message';

@Component({
  selector: 'umbra-messaging-inline',
  templateUrl: './umbra-inline.component.html',
  styleUrls: ['./umbra-inline.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UmbraInlineComponent implements OnInit {
  @Input() umbraMessages: Array<InlineMessage> = [];
  @Input() groupMessages = false;
  constructor(
      private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.umbraMessages.length; i++) {
      const message = this.umbraMessages[i];
      if (message.timeout !== null && message.timeout !== undefined) {
        // TODO(Tim): Find way to make a progress bar per message.
        const timerId = setTimeout(() => {
          this.umbraMessages = this.umbraMessages.filter((messageToClear: InlineMessage) => {
            return messageToClear.title !== message.title;
          });
          clearTimeout(timerId);
          this.changeDetectorRef.markForCheck();
        }, message.timeout);
      }
    }
  }
}
