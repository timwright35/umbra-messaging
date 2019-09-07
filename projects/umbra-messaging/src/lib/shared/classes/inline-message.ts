import { InlineType } from 'lib/lib/shared/types/inline.type';

export class InlineMessage {
    title?: string;
    summary: string;
    icon?: string;
    type: InlineType;
}
