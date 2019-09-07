import { Component, ChangeDetectionStrategy, Renderer2, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { UmbraToastService } from '../shared/services/umbra-toast.service';
import { ToastRef } from '../shared/classes/toast-ref';
import { ToastConfig } from '../shared/classes/toast-config';
import { isDefAndNotNull } from 'lib/lib/shared/classes/common-functions';
import { interval } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../shared/classes/toast-config";
import * as i2 from "../shared/classes/toast-ref";
import * as i3 from "../shared/services/umbra-toast.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/flex-layout/flex";
import * as i6 from "@angular/material";
var _c0 = ["toast"];
var _c1 = ["dataIcon"];
var _c2 = ["closeIcon"];
var _c3 = ["text"];
var _c4 = [4, "ngIf", "ngIfElse"];
var _c5 = ["templateRef", ""];
var _c6 = [3, "value", 4, "ngIf"];
var _c7 = ["fxLayout", "row", "fxLayoutAlign", "center center"];
var _c8 = ["toast", ""];
var _c9 = ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "toast-data-icon"];
var _c10 = ["dataIcon", ""];
var _c11 = ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "toast-text"];
var _c12 = ["text", ""];
var _c13 = ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "toast-close-icon"];
var _c14 = ["closeIcon", ""];
var _c15 = [3, "click", 4, "ngIf"];
var _c16 = [3, "value"];
function UmbraToastComponent_ng_container_0_mat_progress_bar_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-progress-bar", _c16);
} if (rf & 2) {
    var ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", ctx_r22.progressBarValue);
} }
var _c17 = [3, "click"];
function UmbraToastComponent_ng_container_0_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    var _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", _c17);
    i0.ɵɵlistener("click", function UmbraToastComponent_ng_container_0_mat_icon_13_Template_mat_icon_click_0_listener($event) { i0.ɵɵrestoreView(_r29); var ctx_r28 = i0.ɵɵnextContext(2); return ctx_r28.close(); });
    i0.ɵɵtext(1, "close");
    i0.ɵɵelementEnd();
} }
function UmbraToastComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, UmbraToastComponent_ng_container_0_mat_progress_bar_1_Template, 1, 1, "mat-progress-bar", _c6);
    i0.ɵɵelementStart(2, "div", _c7, _c8);
    i0.ɵɵelementStart(4, "div", _c9, _c10);
    i0.ɵɵelementStart(6, "mat-icon");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", _c11, _c12);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", _c13, _c14);
    i0.ɵɵtemplate(13, UmbraToastComponent_ng_container_0_mat_icon_13_Template, 2, 0, "mat-icon", _c15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r19 = i0.ɵɵnextContext();
    i0.ɵɵselect(1);
    i0.ɵɵproperty("ngIf", ctx_r19.data.timeout);
    i0.ɵɵselect(7);
    i0.ɵɵtextInterpolate(ctx_r19.iconType);
    i0.ɵɵselect(10);
    i0.ɵɵtextInterpolate1(" ", ctx_r19.data.toastData.text, " ");
    i0.ɵɵselect(13);
    i0.ɵɵproperty("ngIf", ctx_r19.data.closable);
} }
var _c18 = [4, "ngTemplateOutlet", "ngTemplateOutletContext"];
function UmbraToastComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function UmbraToastComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, UmbraToastComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", _c18);
} if (rf & 2) {
    var ctx_r21 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r21.data.toastData.template)("ngTemplateOutletContext", ctx_r21.data.toastData.templateContext);
} }
var UmbraToastComponent = /** @class */ (function () {
    function UmbraToastComponent(data, toastRef, renderer, umbraToastService, changeDetectorRef) {
        this.data = data;
        this.toastRef = toastRef;
        this.renderer = renderer;
        this.umbraToastService = umbraToastService;
        this.changeDetectorRef = changeDetectorRef;
        this.toastConfig = data;
        this.iconType = data.toastData.type === 'success' ? 'done' : data.toastData.type;
    }
    UmbraToastComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (isDefAndNotNull(this.data.timeout)) {
            this.progressBarValue = 100;
            var timeoutSub$_1 = interval(1000).subscribe(function (seconds) {
                _this.progressBarValue = 100 - seconds * 100 / (_this.data.timeout / 1000);
                _this.changeDetectorRef.markForCheck();
                if (seconds >= (_this.data.timeout / 1000)) {
                    _this.close();
                    timeoutSub$_1.unsubscribe();
                }
            });
        }
    };
    UmbraToastComponent.prototype.ngAfterViewInit = function () {
        this.renderer.addClass(this.toast.nativeElement, 'toast');
        this.renderer.addClass(this.toast.nativeElement, 'toast-type-' + this.toastConfig.toastData.type);
        this.renderer.addClass(this.dataIcon.nativeElement, 'toast-data-icon-' + this.toastConfig.toastData.type);
        this.renderer.addClass(this.closeIcon.nativeElement, 'toast-close-icon-' + this.toastConfig.toastData.type);
    };
    UmbraToastComponent.prototype.ngOnDestroy = function () {
        // NO-OP.
    };
    UmbraToastComponent.prototype.close = function () {
        this.umbraToastService.closeToast(this.toastRef);
    };
    /** @nocollapse */ UmbraToastComponent.ngFactoryDef = function UmbraToastComponent_Factory(t) { return new (t || UmbraToastComponent)(i0.ɵɵdirectiveInject(i1.ToastConfig), i0.ɵɵdirectiveInject(i2.ToastRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i3.UmbraToastService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ UmbraToastComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: UmbraToastComponent, selectors: [["umbra-messaging-toast"]], viewQuery: function UmbraToastComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
            i0.ɵɵviewQuery(_c1, true);
            i0.ɵɵviewQuery(_c2, true);
            i0.ɵɵviewQuery(_c3, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.toast = _t.first);
            i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.dataIcon = _t.first);
            i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.closeIcon = _t.first);
            i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.text = _t.first);
        } }, consts: 3, vars: 2, template: function UmbraToastComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, UmbraToastComponent_ng_container_0_Template, 14, 4, "ng-container", _c4);
            i0.ɵɵtemplate(1, UmbraToastComponent_ng_template_1_Template, 1, 2, "ng-template", null, _c5, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r20 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.data.toastData.text)("ngIfElse", _r20);
        } }, directives: [i4.NgIf, i5.DefaultLayoutDirective, i5.DefaultLayoutAlignDirective, i6.MatIcon, i6.MatProgressBar, i4.NgTemplateOutlet], styles: [".toast[_ngcontent-%COMP%]{background:#fff;border-width:1px;border-style:solid;border-color:#ddd #d6d6d6 #cfcfcf;box-shadow:0 2px 4px rgba(0,0,0,.11);min-height:1em;height:3em}.toast-close-icon[_ngcontent-%COMP%], .toast-data-icon[_ngcontent-%COMP%]{padding:0 .5em}.toast-data-icon[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{border-radius:15px;padding:1px;border:1px solid #000}.toast-data-icon-success[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{background-color:#20b2aa}.toast-data-icon-warning[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{background-color:#dd8900}.toast-data-icon-info[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{background-color:#749aa8}.toast-close-icon[_ngcontent-%COMP%]{cursor:pointer}.toast-close-icon-success[_ngcontent-%COMP%]{background-color:#00b173;height:100%;border-left:3px solid #2e8b57}.toast-close-icon-warning[_ngcontent-%COMP%]{background-color:#dd8900;height:100%;border-left:3px solid #f09c00}.toast-close-icon-info[_ngcontent-%COMP%]{background-color:#749aa8;height:100%;border-left:3px solid #557a88}.toast-type-success[_ngcontent-%COMP%]{background-color:green;color:#fff}.toast-text[_ngcontent-%COMP%]{padding:0 .5em}.toast-type-warning[_ngcontent-%COMP%]{background-color:orange;color:#fff}.toast-type-info[_ngcontent-%COMP%]{background-color:#add8e6;color:#fff}"], changeDetection: 0 });
    return UmbraToastComponent;
}());
export { UmbraToastComponent };
/*@__PURE__*/ i0.ɵsetClassMetadata(UmbraToastComponent, [{
        type: Component,
        args: [{
                selector: 'umbra-messaging-toast',
                templateUrl: './umbra-toast.component.html',
                styleUrls: ['./umbra-toast.component.css'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.ToastConfig }, { type: i2.ToastRef }, { type: i0.Renderer2 }, { type: i3.UmbraToastService }, { type: i0.ChangeDetectorRef }]; }, { toast: [{
            type: ViewChild,
            args: ['toast', { static: false }]
        }], dataIcon: [{
            type: ViewChild,
            args: ['dataIcon', { static: false }]
        }], closeIcon: [{
            type: ViewChild,
            args: ['closeIcon', { static: false }]
        }], text: [{
            type: ViewChild,
            args: ['text', { static: false }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmEtdG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdW1icmEtbWVzc2FnaW5nLyIsInNvdXJjZXMiOlsibGliL3VtYnJhLXRvYXN0L3VtYnJhLXRvYXN0LmNvbXBvbmVudC50cyIsImxpYi91bWJyYS10b2FzdC91bWJyYS10b2FzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUVULHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFFVixpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNkNUIseUNBQXFGOzs7SUFBbkUsZ0RBQTBCOzs7OztJQVNwQyxzQ0FBa0Q7SUFBeEMsaU5BQWlCO0lBQXVCLHFCQUFLO0lBQUEsaUJBQVc7OztJQVY5RSw2QkFDSTtJQUFBLCtHQUFrRTtJQUNsRSxxQ0FDSTtJQUFBLHNDQUNJO0lBQUEsZ0NBQVU7SUFBQSxZQUFjO0lBQUEsaUJBQVc7SUFDdkMsaUJBQU07SUFDTix1Q0FDSTtJQUFBLGFBQ0o7SUFBQSxpQkFBTTtJQUNOLHdDQUNJO0lBQUEsa0dBQWtEO0lBQ3RELGlCQUFNO0lBQ1YsaUJBQU07SUFDViwwQkFBZTs7O0lBWmtDLGNBQW9CO0lBQXBCLDJDQUFvQjtJQUcvQyxjQUFjO0lBQWQsc0NBQWM7SUFHeEIsZUFDSjtJQURJLDREQUNKO0lBRWdDLGVBQXFCO0lBQXJCLDRDQUFx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QUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNsRDs7a0JBTUksU0FBUzttQkFBQyxPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztrQkFDbEMsU0FBUzttQkFBQyxVQUFVLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztrQkFDckMsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztrQkFDdEMsU0FBUzttQkFBQyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE9uSW5pdCxcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgUmVuZGVyZXIyLFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBDaGFuZ2VEZXRlY3RvclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbWJyYVRvYXN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy91bWJyYS10b2FzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9hc3RSZWYgfSBmcm9tICcuLi9zaGFyZWQvY2xhc3Nlcy90b2FzdC1yZWYnO1xyXG5pbXBvcnQgeyBUb2FzdENvbmZpZyB9IGZyb20gJy4uL3NoYXJlZC9jbGFzc2VzL3RvYXN0LWNvbmZpZyc7XHJcbmltcG9ydCB7IGlzRGVmQW5kTm90TnVsbCB9IGZyb20gJ2xpYi9saWIvc2hhcmVkL2NsYXNzZXMvY29tbW9uLWZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGludGVydmFsIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndW1icmEtbWVzc2FnaW5nLXRvYXN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi91bWJyYS10b2FzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsgJy4vdW1icmEtdG9hc3QuY29tcG9uZW50LmNzcycgXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVbWJyYVRvYXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgaWNvblR5cGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgdG9hc3RDb25maWc6IFRvYXN0Q29uZmlnO1xyXG4gICAgcHJvZ3Jlc3NCYXJWYWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3RvYXN0Jywge3N0YXRpYzogZmFsc2V9KSB0b2FzdDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ2RhdGFJY29uJywge3N0YXRpYzogZmFsc2V9KSBkYXRhSWNvbjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ2Nsb3NlSWNvbicsIHtzdGF0aWM6IGZhbHNlfSkgY2xvc2VJY29uOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgndGV4dCcsIHtzdGF0aWM6IGZhbHNlfSkgdGV4dDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICByZWFkb25seSBkYXRhOiBUb2FzdENvbmZpZyxcclxuICAgICAgICByZWFkb25seSB0b2FzdFJlZjogVG9hc3RSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHByaXZhdGUgdW1icmFUb2FzdFNlcnZpY2U6IFVtYnJhVG9hc3RTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnRvYXN0Q29uZmlnID0gZGF0YTtcclxuICAgICAgICB0aGlzLmljb25UeXBlID0gZGF0YS50b2FzdERhdGEudHlwZSA9PT0gJ3N1Y2Nlc3MnID8gJ2RvbmUnIDogZGF0YS50b2FzdERhdGEudHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAoaXNEZWZBbmROb3ROdWxsKHRoaXMuZGF0YS50aW1lb3V0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyVmFsdWUgPSAxMDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRTdWIkID0gaW50ZXJ2YWwoMTAwMCkuc3Vic2NyaWJlKChzZWNvbmRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyVmFsdWUgPSAxMDAgLSBzZWNvbmRzICogMTAwIC8gKHRoaXMuZGF0YS50aW1lb3V0IC8gMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWNvbmRzID49ICh0aGlzLmRhdGEudGltZW91dCAvIDEwMDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRTdWIkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRvYXN0Lm5hdGl2ZUVsZW1lbnQsICd0b2FzdCcpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50b2FzdC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgICAndG9hc3QtdHlwZS0nICsgdGhpcy50b2FzdENvbmZpZy50b2FzdERhdGEudHlwZSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRhdGFJY29uLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgICd0b2FzdC1kYXRhLWljb24tJyArIHRoaXMudG9hc3RDb25maWcudG9hc3REYXRhLnR5cGUpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jbG9zZUljb24ubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICAgJ3RvYXN0LWNsb3NlLWljb24tJyArIHRoaXMudG9hc3RDb25maWcudG9hc3REYXRhLnR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIE5PLU9QLlxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMudW1icmFUb2FzdFNlcnZpY2UuY2xvc2VUb2FzdCh0aGlzLnRvYXN0UmVmKTtcclxuICAgIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS50b2FzdERhdGEudGV4dDsgZWxzZSB0ZW1wbGF0ZVJlZlwiPlxyXG4gICAgPG1hdC1wcm9ncmVzcy1iYXIgW3ZhbHVlXT1cInByb2dyZXNzQmFyVmFsdWVcIiAqbmdJZj1cImRhdGEudGltZW91dFwiPjwvbWF0LXByb2dyZXNzLWJhcj5cclxuICAgIDxkaXYgI3RvYXN0IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9hc3QtZGF0YS1pY29uXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiICNkYXRhSWNvbj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPnt7IGljb25UeXBlIH19PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9hc3QtdGV4dFwiIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiAjdGV4dD5cclxuICAgICAgICAgICAge3sgZGF0YS50b2FzdERhdGEudGV4dCB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1jbG9zZS1pY29uXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiICNjbG9zZUljb24+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiAoY2xpY2spPVwiY2xvc2UoKVwiICpuZ0lmPVwiZGF0YS5jbG9zYWJsZVwiPmNsb3NlPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjdGVtcGxhdGVSZWY+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZGF0YS50b2FzdERhdGEudGVtcGxhdGU7IGNvbnRleHQ6IGRhdGEudG9hc3REYXRhLnRlbXBsYXRlQ29udGV4dFwiPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==