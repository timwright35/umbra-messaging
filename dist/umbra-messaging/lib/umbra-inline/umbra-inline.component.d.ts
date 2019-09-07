import { OnInit } from '@angular/core';
import { InlineMessage } from 'lib/lib/shared/classes/inline-message';
import * as i0 from "@angular/core";
export declare class UmbraInlineComponent implements OnInit {
    umbraMessages: Array<InlineMessage>;
    groupMessages: boolean;
    shouldTimeout: boolean;
    setTimeout: number;
    constructor();
    ngOnInit(): void;
    static ngFactoryDef: i0.ɵɵFactoryDef<UmbraInlineComponent>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<UmbraInlineComponent, "umbra-messaging-inline", never, { 'umbraMessages': "umbraMessages", 'groupMessages': "groupMessages", 'shouldTimeout': "shouldTimeout", 'setTimeout': "setTimeout" }, {}, never>;
}
