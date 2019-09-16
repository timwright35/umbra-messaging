import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/flex-layout/extended";
import * as i3 from "@angular/material";
var _c0 = [1, "umbra-messages-inline"];
var _c1 = [3, "ngIf", "ngIfElse"];
var _c2 = ["groupMessageContainer", ""];
var _c3 = ["inlineMessage", ""];
var _c4 = ["ngFor", "", 3, "ngForOf"];
var _c5 = [4, "ngTemplateOutlet", "ngTemplateOutletContext"];
function UmbraInlineComponent_ng_template_1_ng_template_0_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c6 = function (a0) { return { message: a0 }; };
function UmbraInlineComponent_ng_template_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, UmbraInlineComponent_ng_template_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", _c5);
} if (rf & 2) {
    var message_r48 = ctx.$implicit;
    i0.ɵɵnextContext(2);
    var _r45 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ngTemplateOutlet", _r45)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c6, message_r48));
} }
function UmbraInlineComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, UmbraInlineComponent_ng_template_1_ng_template_0_Template, 1, 4, "ng-template", _c4);
} if (rf & 2) {
    var ctx_r42 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r42.umbraMessages);
} }
var _c7 = [1, "umbra-inline-group-message-container"];
function UmbraInlineComponent_ng_template_2_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function UmbraInlineComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, UmbraInlineComponent_ng_template_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", _c5);
} if (rf & 2) {
    var message_r51 = ctx.$implicit;
    i0.ɵɵnextContext(2);
    var _r45 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ngTemplateOutlet", _r45)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c6, message_r51));
} }
function UmbraInlineComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", _c7);
    i0.ɵɵtemplate(1, UmbraInlineComponent_ng_template_2_ng_template_1_Template, 1, 4, "ng-template", _c4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r44 = i0.ɵɵnextContext();
    i0.ɵɵselect(1);
    i0.ɵɵproperty("ngForOf", ctx_r44.umbraMessages);
} }
var _c8 = [3, "ngClass"];
var _c9 = ["class", "umbra-inline-group-message-icon", 4, "ngIf"];
var _c10 = ["class", "umbra-inline-group-message-title", 4, "ngIf"];
var _c11 = ["class", "umbra-inline-group-message-summary", 4, "ngIf"];
var _c12 = [1, "umbra-inline-group-message-icon"];
function UmbraInlineComponent_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", _c12);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var message_r53 = i0.ɵɵnextContext().message;
    i0.ɵɵselect(2);
    i0.ɵɵtextInterpolate(message_r53["icon"]);
} }
var _c13 = [1, "umbra-inline-group-message-title"];
function UmbraInlineComponent_ng_template_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", _c13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var message_r53 = i0.ɵɵnextContext().message;
    i0.ɵɵselect(1);
    i0.ɵɵtextInterpolate1("", message_r53["title"], ":");
} }
var _c14 = [1, "umbra-inline-group-message-summary"];
function UmbraInlineComponent_ng_template_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", _c14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var message_r53 = i0.ɵɵnextContext().message;
    i0.ɵɵselect(1);
    i0.ɵɵtextInterpolate1(" ", message_r53["summary"], "");
} }
var _c15 = function (a0, a1, a2, a3, a4, a5) { return { "umbra-inline-group-message": a0, "umbra-inline-message": a1, "umbra-messaging-error": a2, "umbra-messaging-info": a3, "umbra-messaging-warning": a4, "umbra-messaging-success": a5 }; };
function UmbraInlineComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", _c8);
    i0.ɵɵtemplate(1, UmbraInlineComponent_ng_template_4_span_1_Template, 3, 1, "span", _c9);
    i0.ɵɵtemplate(2, UmbraInlineComponent_ng_template_4_span_2_Template, 2, 1, "span", _c10);
    i0.ɵɵtemplate(3, UmbraInlineComponent_ng_template_4_span_3_Template, 2, 1, "span", _c11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var message_r53 = ctx.message;
    var ctx_r46 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction6(4, _c15, ctx_r46.groupMessages, !ctx_r46.groupMessages, message_r53["type"] === "error", message_r53["type"] === "info", message_r53["type"] === "warning", message_r53["type"] === "success"));
    i0.ɵɵselect(1);
    i0.ɵɵproperty("ngIf", message_r53["icon"]);
    i0.ɵɵselect(2);
    i0.ɵɵproperty("ngIf", message_r53["title"]);
    i0.ɵɵselect(3);
    i0.ɵɵproperty("ngIf", message_r53["summary"]);
} }
var UmbraInlineComponent = /** @class */ (function () {
    function UmbraInlineComponent() {
        this.umbraMessages = [];
        this.groupMessages = false;
        this.shouldTimeout = false;
        this.setTimeout = 2500;
    }
    UmbraInlineComponent.prototype.ngOnInit = function () {
        if (this.shouldTimeout) {
            // TODO(Tim): Set a timeout on showing the messages.
        }
    };
    /** @nocollapse */ UmbraInlineComponent.ngFactoryDef = function UmbraInlineComponent_Factory(t) { return new (t || UmbraInlineComponent)(); };
    /** @nocollapse */ UmbraInlineComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: UmbraInlineComponent, selectors: [["umbra-messaging-inline"]], inputs: { umbraMessages: "umbraMessages", groupMessages: "groupMessages", shouldTimeout: "shouldTimeout", setTimeout: "setTimeout" }, consts: 6, vars: 2, template: function UmbraInlineComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", _c0);
            i0.ɵɵtemplate(1, UmbraInlineComponent_ng_template_1_Template, 1, 1, "ng-template", _c1);
            i0.ɵɵtemplate(2, UmbraInlineComponent_ng_template_2_Template, 2, 1, "ng-template", null, _c2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, UmbraInlineComponent_ng_template_4_Template, 4, 11, "ng-template", null, _c3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r43 = i0.ɵɵreference(3);
            i0.ɵɵselect(1);
            i0.ɵɵproperty("ngIf", !ctx.groupMessages)("ngIfElse", _r43);
        } }, directives: [i1.NgIf, i1.NgForOf, i1.NgTemplateOutlet, i2.DefaultClassDirective, i1.NgClass, i3.MatIcon], styles: [".umbra-inline-message[_ngcontent-%COMP%]{border-radius:5px;padding:10px;margin-top:2px;border:1px solid #000}.umbra-inline-group-message-container[_ngcontent-%COMP%]{border-radius:5px;border:1px solid #000}.umbra-inline-group-message[_ngcontent-%COMP%]{padding:10px}.umbra-inline-group-message-title[_ngcontent-%COMP%]{font-weight:700}.umbra-messaging-error[_ngcontent-%COMP%]{background-color:red}.umbra-messaging-warning[_ngcontent-%COMP%]{background-color:orange}.umbra-messaging-success[_ngcontent-%COMP%]{background-color:green}.umbra-messaging-info[_ngcontent-%COMP%]{background-color:#add8e6}"], changeDetection: 0 });
    return UmbraInlineComponent;
}());
export { UmbraInlineComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmEtaW5saW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VtYnJhLW1lc3NhZ2luZy8iLCJzb3VyY2VzIjpbImxpYi91bWJyYS1pbmxpbmUvdW1icmEtaW5saW5lLmNvbXBvbmVudC50cyIsImxpYi91bWJyYS1pbmxpbmUvdW1icmEtaW5saW5lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0lDRlgsd0JBQTBGOzs7O0lBQTFGLHFIQUEyRTs7Ozs7SUFBN0QsdUNBQTRELG9FQUFBOzs7SUFEOUUscUdBQ0k7OztJQURlLCtDQUF5Qjs7OztJQU9wQyx3QkFBMEY7OztJQUExRixxSEFBMkU7Ozs7O0lBQTdELHVDQUE0RCxvRUFBQTs7O0lBRmxGLGdDQUNJO0lBQUEscUdBQ0k7SUFFUixpQkFBTTs7O0lBSGlCLGNBQXlCO0lBQXpCLCtDQUF5Qjs7Ozs7Ozs7SUFnQmhELGtDQUNJO0lBQUEsZ0NBQVU7SUFBQSxZQUFxQjtJQUFBLGlCQUFXO0lBQzlDLGlCQUFPOzs7SUFETyxjQUFxQjtJQUFyQix5Q0FBcUI7Ozs7SUFFbkMsa0NBQXdFO0lBQUEsWUFBdUI7SUFBQSxpQkFBTzs7O0lBQTlCLGNBQXVCO0lBQXZCLG9EQUF1Qjs7OztJQUMvRixrQ0FBNkU7SUFBQSxZQUF3QjtJQUFBLGlCQUFPOzs7SUFBL0IsY0FBd0I7SUFBeEIsc0RBQXdCOzs7O0lBWnpHLGdDQVFJO0lBQUEsdUZBQ0k7SUFFSix3RkFBd0U7SUFDeEUsd0ZBQTZFO0lBQ2pGLGlCQUFNOzs7O0lBYkQsMk9BT0Y7SUFDTyxjQUF1QjtJQUF2QiwwQ0FBdUI7SUFHdkIsY0FBd0I7SUFBeEIsMkNBQXdCO0lBQ3hCLGNBQTBCO0lBQTFCLDZDQUEwQjs7QURwQnhDO0lBV0U7UUFKUyxrQkFBYSxHQUF5QixFQUFFLENBQUM7UUFDekMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsZUFBVSxHQUFHLElBQUksQ0FBQztJQUNYLENBQUM7SUFFakIsdUNBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixvREFBb0Q7U0FDckQ7SUFDSCxDQUFDO29HQVhVLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1lDZGpDLGdDQUNJO1lBQUEsdUZBQ0k7WUFJSix3SEFDSTtZQU1SLGlCQUFNO1lBRU4seUhBQ0k7OztZQWZhLGNBQXVCO1lBQXZCLHlDQUF1QixrQkFBQTs7K0JERHhDO0NBMEJDLEFBbEJELElBa0JDO1NBWlksb0JBQW9CO21DQUFwQixvQkFBb0I7Y0FOaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmxpbmVNZXNzYWdlIH0gZnJvbSAnbGliL2xpYi9zaGFyZWQvY2xhc3Nlcy9pbmxpbmUtbWVzc2FnZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VtYnJhLW1lc3NhZ2luZy1pbmxpbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdW1icmEtaW5saW5lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdW1icmEtaW5saW5lLmNvbXBvbmVudC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVW1icmFJbmxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB1bWJyYU1lc3NhZ2VzOiBBcnJheTxJbmxpbmVNZXNzYWdlPiA9IFtdO1xuICBASW5wdXQoKSBncm91cE1lc3NhZ2VzID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3VsZFRpbWVvdXQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2V0VGltZW91dCA9IDI1MDA7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkVGltZW91dCkge1xuICAgICAgLy8gVE9ETyhUaW0pOiBTZXQgYSB0aW1lb3V0IG9uIHNob3dpbmcgdGhlIG1lc3NhZ2VzLlxuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInVtYnJhLW1lc3NhZ2VzLWlubGluZVwiPlxyXG4gICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIiFncm91cE1lc3NhZ2VzXCIgW25nSWZFbHNlXT1cImdyb3VwTWVzc2FnZUNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBbbmdGb3JPZl09XCJ1bWJyYU1lc3NhZ2VzXCIgbGV0LW1lc3NhZ2U+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpbmxpbmVNZXNzYWdlO2NvbnRleHQ6e21lc3NhZ2U6IG1lc3NhZ2V9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8bmctdGVtcGxhdGUgI2dyb3VwTWVzc2FnZUNvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidW1icmEtaW5saW5lLWdyb3VwLW1lc3NhZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBbbmdGb3JPZl09XCJ1bWJyYU1lc3NhZ2VzXCIgbGV0LW1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaW5saW5lTWVzc2FnZTtjb250ZXh0OnttZXNzYWdlOiBtZXNzYWdlfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2lubGluZU1lc3NhZ2UgbGV0LW1lc3NhZ2U9XCJtZXNzYWdlXCI+XHJcbiAgICA8ZGl2IFtuZ0NsYXNzXT1cIntcclxuICAgICAndW1icmEtaW5saW5lLWdyb3VwLW1lc3NhZ2UnOiBncm91cE1lc3NhZ2VzLFxyXG4gICAgICd1bWJyYS1pbmxpbmUtbWVzc2FnZSc6ICFncm91cE1lc3NhZ2VzLFxyXG4gICAgICd1bWJyYS1tZXNzYWdpbmctZXJyb3InOiBtZXNzYWdlWyd0eXBlJ10gPT09ICdlcnJvcicsXHJcbiAgICAgJ3VtYnJhLW1lc3NhZ2luZy1pbmZvJzogbWVzc2FnZVsndHlwZSddID09PSAnaW5mbycsXHJcbiAgICAgJ3VtYnJhLW1lc3NhZ2luZy13YXJuaW5nJzogbWVzc2FnZVsndHlwZSddID09PSAnd2FybmluZycsXHJcbiAgICAgJ3VtYnJhLW1lc3NhZ2luZy1zdWNjZXNzJzogbWVzc2FnZVsndHlwZSddID09PSAnc3VjY2VzcydcclxuICAgICB9XCI+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJtZXNzYWdlWydpY29uJ11cIiBjbGFzcz1cInVtYnJhLWlubGluZS1ncm91cC1tZXNzYWdlLWljb25cIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPnt7IG1lc3NhZ2VbJ2ljb24nXSB9fTwvbWF0LWljb24+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibWVzc2FnZVsndGl0bGUnXVwiIGNsYXNzPVwidW1icmEtaW5saW5lLWdyb3VwLW1lc3NhZ2UtdGl0bGVcIj57eyBtZXNzYWdlWyd0aXRsZSddIH19Ojwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cIm1lc3NhZ2VbJ3N1bW1hcnknXVwiIGNsYXNzPVwidW1icmEtaW5saW5lLWdyb3VwLW1lc3NhZ2Utc3VtbWFyeVwiPiB7eyBtZXNzYWdlWydzdW1tYXJ5J10gfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19