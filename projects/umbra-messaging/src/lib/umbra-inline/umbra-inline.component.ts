import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit
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
  @Input() shouldTimeout = false;
  @Input() setTimeout = 2500;
  constructor() { }

  ngOnInit(): void {
    if (this.shouldTimeout) {
      // TODO(Tim): Set a timeout on showing the messages.
    }
  }
}
