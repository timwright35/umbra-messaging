import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = [1, "umbra-messages-inline"];
const _c1 = [3, "ngIf", "ngIfElse"];
const _c2 = ["groupMessageContainer", ""];
const _c3 = ["ngFor", "", 3, "ngForOf"];
const _c4 = [1, "umbra-inline-message"];
function UmbraInlineComponent_ng_template_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", _c4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r16 = ctx.$implicit;
    i0.ɵɵselect(1);
    i0.ɵɵtextInterpolate1(" ", message_r16["summary"], " ");
} }
function UmbraInlineComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, UmbraInlineComponent_ng_template_1_ng_template_0_Template, 2, 1, "ng-template", _c3);
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r12.umbraMessages);
} }
const _c5 = [1, "umbra-inline-group-message-container"];
function UmbraInlineComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", _c4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r18 = ctx.$implicit;
    i0.ɵɵselect(1);
    i0.ɵɵtextInterpolate1(" ", message_r18["summary"], " ");
} }
function UmbraInlineComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", _c5);
    i0.ɵɵtemplate(1, UmbraInlineComponent_ng_template_2_ng_template_1_Template, 2, 1, "ng-template", _c3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵselect(1);
    i0.ɵɵproperty("ngForOf", ctx_r14.umbraMessages);
} }
export class UmbraInlineComponent {
    constructor() {
        this.umbraMessages = [];
        this.groupMessages = false;
        this.shouldTimeout = false;
        this.setTimeout = 2500;
    }
    ngOnInit() {
        if (this.shouldTimeout) {
            // TODO(Tim): Set a timeout on showing the messages.
        }
    }
}
/** @nocollapse */ UmbraInlineComponent.ngFactoryDef = function UmbraInlineComponent_Factory(t) { return new (t || UmbraInlineComponent)(); };
/** @nocollapse */ UmbraInlineComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: UmbraInlineComponent, selectors: [["umbra-messaging-inline"]], inputs: { umbraMessages: "umbraMessages", groupMessages: "groupMessages", shouldTimeout: "shouldTimeout", setTimeout: "setTimeout" }, consts: 4, vars: 2, template: function UmbraInlineComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", _c0);
        i0.ɵɵtemplate(1, UmbraInlineComponent_ng_template_1_Template, 1, 1, "ng-template", _c1);
        i0.ɵɵtemplate(2, UmbraInlineComponent_ng_template_2_Template, 2, 1, "ng-template", null, _c2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r13 = i0.ɵɵreference(3);
        i0.ɵɵselect(1);
        i0.ɵɵproperty("ngIf", ctx.shouldTimeout)("ngIfElse", _r13);
    } }, directives: [i1.NgIf, i1.NgForOf], styles: [""], changeDetection: 0 });
/*@__PURE__*/ i0.ɵsetClassMetadata(UmbraInlineComponent, [{
        type: Component,
        args: [{
                selector: 'umbra-messaging-inline',
                templateUrl: './umbra-inline.component.html',
                styleUrls: ['./umbra-inline.component.css'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { umbraMessages: [{
            type: Input
        }], groupMessages: [{
            type: Input
        }], shouldTimeout: [{
            type: Input
        }], setTimeout: [{
            type: Input
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmEtaW5saW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VtYnJhLW1lc3NhZ2luZy8iLCJzb3VyY2VzIjpbImxpYi91bWJyYS1pbmxpbmUvdW1icmEtaW5saW5lLmNvbXBvbmVudC50cyIsImxpYi91bWJyYS1pbmxpbmUvdW1icmEtaW5saW5lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lDRlgsZ0NBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQU07OztJQURGLGNBQ0o7SUFESSx1REFDSjs7O0lBSEoscUdBQ0k7OztJQURlLCtDQUF5Qjs7OztJQVNwQyxnQ0FDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBTTs7O0lBREYsY0FDSjtJQURJLHVEQUNKOzs7SUFKUixnQ0FDSTtJQUFBLHFHQUNJO0lBSVIsaUJBQU07OztJQUxpQixjQUF5QjtJQUF6QiwrQ0FBeUI7O0FESXhELE1BQU0sT0FBTyxvQkFBb0I7SUFLL0I7UUFKUyxrQkFBYSxHQUF5QixFQUFFLENBQUM7UUFDekMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsZUFBVSxHQUFHLElBQUksQ0FBQztJQUNYLENBQUM7SUFFakIsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixvREFBb0Q7U0FDckQ7SUFDSCxDQUFDOztnR0FYVSxvQkFBb0I7bUVBQXBCLG9CQUFvQjtRQ2RqQyxnQ0FDSTtRQUFBLHVGQUNJO1FBTUosd0hBQ0k7UUFRUixpQkFBTTs7O1FBaEJXLGNBQXNCO1FBQXRCLHdDQUFzQixrQkFBQTs7bUNEYTFCLG9CQUFvQjtjQU5oQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElubGluZU1lc3NhZ2UgfSBmcm9tICdsaWIvbGliL3NoYXJlZC9jbGFzc2VzL2lubGluZS1tZXNzYWdlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndW1icmEtbWVzc2FnaW5nLWlubGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi91bWJyYS1pbmxpbmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91bWJyYS1pbmxpbmUuY29tcG9uZW50LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVbWJyYUlubGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHVtYnJhTWVzc2FnZXM6IEFycmF5PElubGluZU1lc3NhZ2U+ID0gW107XG4gIEBJbnB1dCgpIGdyb3VwTWVzc2FnZXMgPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvdWxkVGltZW91dCA9IGZhbHNlO1xuICBASW5wdXQoKSBzZXRUaW1lb3V0ID0gMjUwMDtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRUaW1lb3V0KSB7XG4gICAgICAvLyBUT0RPKFRpbSk6IFNldCBhIHRpbWVvdXQgb24gc2hvd2luZyB0aGUgbWVzc2FnZXMuXG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidW1icmEtbWVzc2FnZXMtaW5saW5lXCI+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwic2hvdWxkVGltZW91dFwiIFtuZ0lmRWxzZV09XCJncm91cE1lc3NhZ2VDb250YWluZXJcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgW25nRm9yT2ZdPVwidW1icmFNZXNzYWdlc1wiIGxldC1tZXNzYWdlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidW1icmEtaW5saW5lLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgIHt7IG1lc3NhZ2VbJ3N1bW1hcnknXSB9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjZ3JvdXBNZXNzYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1bWJyYS1pbmxpbmUtZ3JvdXAtbWVzc2FnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIFtuZ0Zvck9mXT1cInVtYnJhTWVzc2FnZXNcIiBsZXQtbWVzc2FnZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1bWJyYS1pbmxpbmUtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IG1lc3NhZ2VbJ3N1bW1hcnknXSB9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuIl19