import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/flex-layout/extended";
import * as i3 from "@angular/material";
const _c0 = [1, "umbra-messages-inline"];
const _c1 = [3, "ngIf", "ngIfElse"];
const _c2 = ["groupMessageContainer", ""];
const _c3 = ["inlineMessage", ""];
const _c4 = ["ngFor", "", 3, "ngForOf"];
const _c5 = [4, "ngTemplateOutlet", "ngTemplateOutletContext"];
function UmbraInlineComponent_ng_template_1_ng_template_0_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c6 = function (a0) { return { message: a0 }; };
function UmbraInlineComponent_ng_template_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, UmbraInlineComponent_ng_template_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", _c5);
} if (rf & 2) {
    const message_r18 = ctx.$implicit;
    i0.ɵɵnextContext(2);
    const _r15 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ngTemplateOutlet", _r15)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c6, message_r18));
} }
function UmbraInlineComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, UmbraInlineComponent_ng_template_1_ng_template_0_Template, 1, 4, "ng-template", _c4);
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r12.umbraMessages);
} }
const _c7 = [1, "umbra-inline-group-message-container"];
function UmbraInlineComponent_ng_template_2_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function UmbraInlineComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, UmbraInlineComponent_ng_template_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", _c5);
} if (rf & 2) {
    const message_r21 = ctx.$implicit;
    i0.ɵɵnextContext(2);
    const _r15 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ngTemplateOutlet", _r15)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c6, message_r21));
} }
function UmbraInlineComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", _c7);
    i0.ɵɵtemplate(1, UmbraInlineComponent_ng_template_2_ng_template_1_Template, 1, 4, "ng-template", _c4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵselect(1);
    i0.ɵɵproperty("ngForOf", ctx_r14.umbraMessages);
} }
const _c8 = [3, "ngClass"];
const _c9 = ["class", "umbra-inline-group-message-icon", 4, "ngIf"];
const _c10 = ["class", "umbra-inline-group-message-title", 4, "ngIf"];
const _c11 = ["class", "umbra-inline-group-message-summary", 4, "ngIf"];
const _c12 = [1, "umbra-inline-group-message-icon"];
function UmbraInlineComponent_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", _c12);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r23 = i0.ɵɵnextContext().message;
    i0.ɵɵselect(2);
    i0.ɵɵtextInterpolate(message_r23["icon"]);
} }
const _c13 = [1, "umbra-inline-group-message-title"];
function UmbraInlineComponent_ng_template_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", _c13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r23 = i0.ɵɵnextContext().message;
    i0.ɵɵselect(1);
    i0.ɵɵtextInterpolate1("", message_r23["title"], ":");
} }
const _c14 = [1, "umbra-inline-group-message-summary"];
function UmbraInlineComponent_ng_template_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", _c14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r23 = i0.ɵɵnextContext().message;
    i0.ɵɵselect(1);
    i0.ɵɵtextInterpolate1(" ", message_r23["summary"], "");
} }
const _c15 = function (a0, a1, a2, a3, a4, a5) { return { "umbra-inline-group-message": a0, "umbra-inline-message": a1, "umbra-messaging-error": a2, "umbra-messaging-info": a3, "umbra-messaging-warning": a4, "umbra-messaging-success": a5 }; };
function UmbraInlineComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", _c8);
    i0.ɵɵtemplate(1, UmbraInlineComponent_ng_template_4_span_1_Template, 3, 1, "span", _c9);
    i0.ɵɵtemplate(2, UmbraInlineComponent_ng_template_4_span_2_Template, 2, 1, "span", _c10);
    i0.ɵɵtemplate(3, UmbraInlineComponent_ng_template_4_span_3_Template, 2, 1, "span", _c11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r23 = ctx.message;
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction6(4, _c15, ctx_r16.groupMessages, !ctx_r16.groupMessages, message_r23["type"] === "error", message_r23["type"] === "info", message_r23["type"] === "warning", message_r23["type"] === "success"));
    i0.ɵɵselect(1);
    i0.ɵɵproperty("ngIf", message_r23["icon"]);
    i0.ɵɵselect(2);
    i0.ɵɵproperty("ngIf", message_r23["title"]);
    i0.ɵɵselect(3);
    i0.ɵɵproperty("ngIf", message_r23["summary"]);
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
/** @nocollapse */ UmbraInlineComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: UmbraInlineComponent, selectors: [["umbra-messaging-inline"]], inputs: { umbraMessages: "umbraMessages", groupMessages: "groupMessages", shouldTimeout: "shouldTimeout", setTimeout: "setTimeout" }, consts: 6, vars: 2, template: function UmbraInlineComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", _c0);
        i0.ɵɵtemplate(1, UmbraInlineComponent_ng_template_1_Template, 1, 1, "ng-template", _c1);
        i0.ɵɵtemplate(2, UmbraInlineComponent_ng_template_2_Template, 2, 1, "ng-template", null, _c2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, UmbraInlineComponent_ng_template_4_Template, 4, 11, "ng-template", null, _c3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r13 = i0.ɵɵreference(3);
        i0.ɵɵselect(1);
        i0.ɵɵproperty("ngIf", !ctx.groupMessages)("ngIfElse", _r13);
    } }, directives: [i1.NgIf, i1.NgForOf, i1.NgTemplateOutlet, i2.DefaultClassDirective, i1.NgClass, i3.MatIcon], styles: [".umbra-inline-message[_ngcontent-%COMP%]{border-radius:5px;padding:10px;margin-top:2px;border:1px solid #000}.umbra-inline-group-message-container[_ngcontent-%COMP%]{border-radius:5px;border:1px solid #000}.umbra-inline-group-message[_ngcontent-%COMP%]{padding:10px}.umbra-inline-group-message-title[_ngcontent-%COMP%]{font-weight:700}.umbra-messaging-error[_ngcontent-%COMP%]{background-color:red}.umbra-messaging-warning[_ngcontent-%COMP%]{background-color:orange}.umbra-messaging-success[_ngcontent-%COMP%]{background-color:green}.umbra-messaging-info[_ngcontent-%COMP%]{background-color:#add8e6}"], changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmEtaW5saW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VtYnJhLW1lc3NhZ2luZy8iLCJzb3VyY2VzIjpbImxpYi91bWJyYS1pbmxpbmUvdW1icmEtaW5saW5lLmNvbXBvbmVudC50cyIsImxpYi91bWJyYS1pbmxpbmUvdW1icmEtaW5saW5lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0lDRlgsd0JBQTBGOzs7O0lBQTFGLHFIQUEyRTs7Ozs7SUFBN0QsdUNBQTRELG9FQUFBOzs7SUFEOUUscUdBQ0k7OztJQURlLCtDQUF5Qjs7OztJQU9wQyx3QkFBMEY7OztJQUExRixxSEFBMkU7Ozs7O0lBQTdELHVDQUE0RCxvRUFBQTs7O0lBRmxGLGdDQUNJO0lBQUEscUdBQ0k7SUFFUixpQkFBTTs7O0lBSGlCLGNBQXlCO0lBQXpCLCtDQUF5Qjs7Ozs7Ozs7SUFnQmhELGtDQUNJO0lBQUEsZ0NBQVU7SUFBQSxZQUFxQjtJQUFBLGlCQUFXO0lBQzlDLGlCQUFPOzs7SUFETyxjQUFxQjtJQUFyQix5Q0FBcUI7Ozs7SUFFbkMsa0NBQXdFO0lBQUEsWUFBdUI7SUFBQSxpQkFBTzs7O0lBQTlCLGNBQXVCO0lBQXZCLG9EQUF1Qjs7OztJQUMvRixrQ0FBNkU7SUFBQSxZQUF3QjtJQUFBLGlCQUFPOzs7SUFBL0IsY0FBd0I7SUFBeEIsc0RBQXdCOzs7O0lBWnpHLGdDQVFJO0lBQUEsdUZBQ0k7SUFFSix3RkFBd0U7SUFDeEUsd0ZBQTZFO0lBQ2pGLGlCQUFNOzs7O0lBYkQsMk9BT0Y7SUFDTyxjQUF1QjtJQUF2QiwwQ0FBdUI7SUFHdkIsY0FBd0I7SUFBeEIsMkNBQXdCO0lBQ3hCLGNBQTBCO0lBQTFCLDZDQUEwQjs7QURkeEMsTUFBTSxPQUFPLG9CQUFvQjtJQUsvQjtRQUpTLGtCQUFhLEdBQXlCLEVBQUUsQ0FBQztRQUN6QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixlQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ1gsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLG9EQUFvRDtTQUNyRDtJQUNILENBQUM7O2dHQVhVLG9CQUFvQjttRUFBcEIsb0JBQW9CO1FDZGpDLGdDQUNJO1FBQUEsdUZBQ0k7UUFJSix3SEFDSTtRQU1SLGlCQUFNO1FBRU4seUhBQ0k7OztRQWZhLGNBQXVCO1FBQXZCLHlDQUF1QixrQkFBQTs7bUNEYTNCLG9CQUFvQjtjQU5oQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElubGluZU1lc3NhZ2UgfSBmcm9tICdsaWIvbGliL3NoYXJlZC9jbGFzc2VzL2lubGluZS1tZXNzYWdlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndW1icmEtbWVzc2FnaW5nLWlubGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi91bWJyYS1pbmxpbmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91bWJyYS1pbmxpbmUuY29tcG9uZW50LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVbWJyYUlubGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHVtYnJhTWVzc2FnZXM6IEFycmF5PElubGluZU1lc3NhZ2U+ID0gW107XG4gIEBJbnB1dCgpIGdyb3VwTWVzc2FnZXMgPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvdWxkVGltZW91dCA9IGZhbHNlO1xuICBASW5wdXQoKSBzZXRUaW1lb3V0ID0gMjUwMDtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRUaW1lb3V0KSB7XG4gICAgICAvLyBUT0RPKFRpbSk6IFNldCBhIHRpbWVvdXQgb24gc2hvd2luZyB0aGUgbWVzc2FnZXMuXG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidW1icmEtbWVzc2FnZXMtaW5saW5lXCI+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiIWdyb3VwTWVzc2FnZXNcIiBbbmdJZkVsc2VdPVwiZ3JvdXBNZXNzYWdlQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIFtuZ0Zvck9mXT1cInVtYnJhTWVzc2FnZXNcIiBsZXQtbWVzc2FnZT5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImlubGluZU1lc3NhZ2U7Y29udGV4dDp7bWVzc2FnZTogbWVzc2FnZX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjZ3JvdXBNZXNzYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1bWJyYS1pbmxpbmUtZ3JvdXAtbWVzc2FnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIFtuZ0Zvck9mXT1cInVtYnJhTWVzc2FnZXNcIiBsZXQtbWVzc2FnZT5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpbmxpbmVNZXNzYWdlO2NvbnRleHQ6e21lc3NhZ2U6IG1lc3NhZ2V9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjaW5saW5lTWVzc2FnZSBsZXQtbWVzc2FnZT1cIm1lc3NhZ2VcIj5cclxuICAgIDxkaXYgW25nQ2xhc3NdPVwie1xyXG4gICAgICd1bWJyYS1pbmxpbmUtZ3JvdXAtbWVzc2FnZSc6IGdyb3VwTWVzc2FnZXMsXHJcbiAgICAgJ3VtYnJhLWlubGluZS1tZXNzYWdlJzogIWdyb3VwTWVzc2FnZXMsXHJcbiAgICAgJ3VtYnJhLW1lc3NhZ2luZy1lcnJvcic6IG1lc3NhZ2VbJ3R5cGUnXSA9PT0gJ2Vycm9yJyxcclxuICAgICAndW1icmEtbWVzc2FnaW5nLWluZm8nOiBtZXNzYWdlWyd0eXBlJ10gPT09ICdpbmZvJyxcclxuICAgICAndW1icmEtbWVzc2FnaW5nLXdhcm5pbmcnOiBtZXNzYWdlWyd0eXBlJ10gPT09ICd3YXJuaW5nJyxcclxuICAgICAndW1icmEtbWVzc2FnaW5nLXN1Y2Nlc3MnOiBtZXNzYWdlWyd0eXBlJ10gPT09ICdzdWNjZXNzJ1xyXG4gICAgIH1cIj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cIm1lc3NhZ2VbJ2ljb24nXVwiIGNsYXNzPVwidW1icmEtaW5saW5lLWdyb3VwLW1lc3NhZ2UtaWNvblwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+e3sgbWVzc2FnZVsnaWNvbiddIH19PC9tYXQtaWNvbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJtZXNzYWdlWyd0aXRsZSddXCIgY2xhc3M9XCJ1bWJyYS1pbmxpbmUtZ3JvdXAtbWVzc2FnZS10aXRsZVwiPnt7IG1lc3NhZ2VbJ3RpdGxlJ10gfX06PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibWVzc2FnZVsnc3VtbWFyeSddXCIgY2xhc3M9XCJ1bWJyYS1pbmxpbmUtZ3JvdXAtbWVzc2FnZS1zdW1tYXJ5XCI+IHt7IG1lc3NhZ2VbJ3N1bW1hcnknXSB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=