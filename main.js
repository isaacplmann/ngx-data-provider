(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-data-provider/fesm5/ngx-data-provider.js":
/*!***********************************************************!*\
  !*** ./dist/ngx-data-provider/fesm5/ngx-data-provider.js ***!
  \***********************************************************/
/*! exports provided: NgxDataProviderService, NgxDataProviderDirective, NgxDataConsumerComponent, NgxDataProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDataProviderService", function() { return NgxDataProviderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDataProviderDirective", function() { return NgxDataProviderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDataConsumerComponent", function() { return NgxDataConsumerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDataProviderModule", function() { return NgxDataProviderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxDataProviderService = /** @class */ (function () {
    function NgxDataProviderService() {
        this.providers = {};
    }
    /**
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    NgxDataProviderService.prototype.setProvider = /**
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    function (key, data) {
        if (!this.providers[key]) {
            this.providers[key] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](data);
        }
        else {
            this.providers[key].next(data);
        }
    };
    NgxDataProviderService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */ NgxDataProviderService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function NgxDataProviderService_Factory() { return new NgxDataProviderService(); }, token: NgxDataProviderService, providedIn: "root" });
    return NgxDataProviderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxDataProviderDirective = /** @class */ (function () {
    function NgxDataProviderDirective(providerService) {
        this.providerService = providerService;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxDataProviderDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var key = changes.key, data = changes.data;
        if (key || data) {
            if (this.key && this.data) {
                setTimeout(function () { return _this.providerService.setProvider(_this.key, _this.data); });
            }
        }
    };
    NgxDataProviderDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'ngx-data-provider, [ngxDataProvider]'
                },] },
    ];
    /** @nocollapse */
    NgxDataProviderDirective.ctorParameters = function () { return [
        { type: NgxDataProviderService }
    ]; };
    NgxDataProviderDirective.propDecorators = {
        key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgxDataProviderDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxDataConsumerComponent = /** @class */ (function () {
    function NgxDataConsumerComponent(providerService) {
        this.providerService = providerService;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxDataConsumerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var key = changes.key;
        if (key) {
            this.data$ = this.providerService.providers[this.key];
            if (!this.data$) {
                /** @type {?} */
                var timer_1 = setInterval(function () {
                    _this.data$ = _this.providerService.providers[_this.key];
                    if (_this.data$) {
                        clearInterval(timer_1);
                    }
                });
            }
        }
    };
    NgxDataConsumerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-data-consumer',
                    template: "\n  <ng-container *ngTemplateOutlet=\"renderTemplate;\n    context: data$ | async\">\n  </ng-container>\n  "
                },] },
    ];
    /** @nocollapse */
    NgxDataConsumerComponent.ctorParameters = function () { return [
        { type: NgxDataProviderService }
    ]; };
    NgxDataConsumerComponent.propDecorators = {
        key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        renderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] }]
    };
    return NgxDataConsumerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxDataProviderModule = /** @class */ (function () {
    function NgxDataProviderModule() {
    }
    NgxDataProviderModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    declarations: [NgxDataProviderDirective, NgxDataConsumerComponent],
                    exports: [NgxDataProviderDirective, NgxDataConsumerComponent]
                },] },
    ];
    return NgxDataProviderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGEtcHJvdmlkZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1kYXRhLXByb3ZpZGVyL2xpYi9uZ3gtZGF0YS1wcm92aWRlci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtZGF0YS1wcm92aWRlci9saWIvbmd4LWRhdGEtcHJvdmlkZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtZGF0YS1wcm92aWRlci9saWIvbmd4LWRhdGEtY29uc3VtZXIvbmd4LWRhdGEtY29uc3VtZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtZGF0YS1wcm92aWRlci9saWIvbmd4LWRhdGEtcHJvdmlkZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3ZpZGVyTWFwIHtcbiAgW2tleTogc3RyaW5nXTogU3ViamVjdDxhbnk+O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hEYXRhUHJvdmlkZXJTZXJ2aWNlIHtcbiAgcHJvdmlkZXJzOiBQcm92aWRlck1hcCA9IHt9O1xuXG4gIHNldFByb3ZpZGVyKGtleTogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMucHJvdmlkZXJzW2tleV0pIHtcbiAgICAgIHRoaXMucHJvdmlkZXJzW2tleV0gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3ZpZGVyc1trZXldLm5leHQoZGF0YSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmd4RGF0YVByb3ZpZGVyU2VydmljZSB9IGZyb20gJy4vbmd4LWRhdGEtcHJvdmlkZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25neC1kYXRhLXByb3ZpZGVyLCBbbmd4RGF0YVByb3ZpZGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4RGF0YVByb3ZpZGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAga2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGRhdGE6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb3ZpZGVyU2VydmljZTogTmd4RGF0YVByb3ZpZGVyU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgeyBrZXksIGRhdGEgfSA9IGNoYW5nZXM7XG4gICAgaWYgKGtleSB8fCBkYXRhKSB7XG4gICAgICBpZiAodGhpcy5rZXkgJiYgdGhpcy5kYXRhKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm92aWRlclNlcnZpY2Uuc2V0UHJvdmlkZXIodGhpcy5rZXksIHRoaXMuZGF0YSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE5neERhdGFQcm92aWRlclNlcnZpY2UgfSBmcm9tICcuLi9uZ3gtZGF0YS1wcm92aWRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRhdGEtY29uc3VtZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicmVuZGVyVGVtcGxhdGU7XG4gICAgY29udGV4dDogZGF0YSQgfCBhc3luY1wiPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEYXRhQ29uc3VtZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBrZXk6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKVxuICByZW5kZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBkYXRhJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvdmlkZXJTZXJ2aWNlOiBOZ3hEYXRhUHJvdmlkZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCB7IGtleSB9ID0gY2hhbmdlcztcbiAgICBpZiAoa2V5KSB7XG4gICAgICB0aGlzLmRhdGEkID0gdGhpcy5wcm92aWRlclNlcnZpY2UucHJvdmlkZXJzW3RoaXMua2V5XTtcbiAgICAgIGlmICghdGhpcy5kYXRhJCkge1xuICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEkID0gdGhpcy5wcm92aWRlclNlcnZpY2UucHJvdmlkZXJzW3RoaXMua2V5XTtcbiAgICAgICAgICBpZiAodGhpcy5kYXRhJCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hEYXRhQ29uc3VtZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1kYXRhLWNvbnN1bWVyL25neC1kYXRhLWNvbnN1bWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hEYXRhUHJvdmlkZXJEaXJlY3RpdmUgfSBmcm9tICcuL25neC1kYXRhLXByb3ZpZGVyLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ3hEYXRhUHJvdmlkZXJEaXJlY3RpdmUsIE5neERhdGFDb25zdW1lckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOZ3hEYXRhUHJvdmlkZXJEaXJlY3RpdmUsIE5neERhdGFDb25zdW1lckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RGF0YVByb3ZpZGVyTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7eUJBVzJCLEVBQUU7Ozs7Ozs7SUFFM0IsNENBQVc7Ozs7O0lBQVgsVUFBWSxHQUFXLEVBQUUsSUFBUztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztLQUNGOztnQkFaRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7aUNBVEQ7Ozs7Ozs7QUNBQTtJQWFFLGtDQUFvQixlQUF1QztRQUF2QyxvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7S0FBSTs7Ozs7SUFFL0QsOENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQU9DO1FBTlMsSUFBQSxpQkFBRyxFQUFFLG1CQUFJLENBQWE7UUFDOUIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Y7S0FDRjs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2lCQUNqRDs7OztnQkFKUSxzQkFBc0I7OztzQkFNNUIsS0FBSzt1QkFFTCxLQUFLOzttQ0FWUjs7Ozs7OztBQ0FBO0lBdUJFLGtDQUFvQixlQUF1QztRQUF2QyxvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7S0FBSTs7Ozs7SUFFL0QsOENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQWFDO1FBWlMsSUFBQSxpQkFBRyxDQUFhO1FBQ3hCLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7O2dCQUNmLElBQU0sT0FBSyxHQUFHLFdBQVcsQ0FBQztvQkFDeEIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RELElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTt3QkFDZCxhQUFhLENBQUMsT0FBSyxDQUFDLENBQUM7cUJBQ3RCO2lCQUNGLENBQUMsQ0FBQzthQUNKO1NBQ0Y7S0FDRjs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsNkdBSVQ7aUJBQ0Y7Ozs7Z0JBVFEsc0JBQXNCOzs7c0JBVzVCLEtBQUs7aUNBR0wsS0FBSyxZQUNMLFlBQVksU0FBQyxXQUFXOzttQ0FsQjNCOzs7Ozs7O0FDQUE7Ozs7Z0JBTUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUM7b0JBQ2xFLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixFQUFFLHdCQUF3QixDQUFDO2lCQUM5RDs7Z0NBVkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngx-data-provider:\n<ngx-data-provider key=\"theme\" [data]=\"{ theme: 'dark' }\">\n  <ngx-data-consumer key=\"theme\">\n    <ng-template let-theme=\"theme\">\n      {{theme}}\n    </ng-template>\n  </ngx-data-consumer>\n</ngx-data-provider>\n<hr/> theme-provider:\n<theme-provider>\n  <ngx-data-consumer key=\"theme\">\n    <ng-template let-theme=\"theme\">\n      {{theme}}\n    </ng-template>\n  </ngx-data-consumer>\n  <hr/>\n\n  <theme-consumer>\n    <ng-template let-theme=\"theme\">\n      {{theme}}\n    </ng-template>\n  </theme-consumer>\n  <hr/>\n  <themed-button></themed-button>\n</theme-provider>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-data-provider */ "./dist/ngx-data-provider/fesm5/ngx-data-provider.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _theme_provider_theme_provider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-provider/theme-provider.component */ "./src/app/theme-provider/theme-provider.component.ts");
/* harmony import */ var _theme_consumer_theme_consumer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-consumer/theme-consumer.component */ "./src/app/theme-consumer/theme-consumer.component.ts");
/* harmony import */ var _themed_button_themed_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./themed-button/themed-button.component */ "./src/app/themed-button/themed-button.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _theme_provider_theme_provider_component__WEBPACK_IMPORTED_MODULE_4__["ThemeProviderComponent"], _theme_consumer_theme_consumer_component__WEBPACK_IMPORTED_MODULE_5__["ThemeConsumerComponent"], _themed_button_themed_button_component__WEBPACK_IMPORTED_MODULE_6__["ThemedButtonComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_data_provider__WEBPACK_IMPORTED_MODULE_2__["NgxDataProviderModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/theme-consumer/theme-consumer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/theme-consumer/theme-consumer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme-consumer/theme-consumer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/theme-consumer/theme-consumer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-data-consumer key=\"theme\" [renderTemplate]=\"renderTemplate\">\n  <ng-content></ng-content>\n</ngx-data-consumer>"

/***/ }),

/***/ "./src/app/theme-consumer/theme-consumer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/theme-consumer/theme-consumer.component.ts ***!
  \************************************************************/
/*! exports provided: ThemeConsumerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumerComponent", function() { return ThemeConsumerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThemeConsumerComponent = /** @class */ (function () {
    function ThemeConsumerComponent() {
    }
    ThemeConsumerComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ThemeConsumerComponent.prototype, "renderTemplate", void 0);
    ThemeConsumerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'theme-consumer',
            template: __webpack_require__(/*! ./theme-consumer.component.html */ "./src/app/theme-consumer/theme-consumer.component.html"),
            styles: [__webpack_require__(/*! ./theme-consumer.component.css */ "./src/app/theme-consumer/theme-consumer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThemeConsumerComponent);
    return ThemeConsumerComponent;
}());



/***/ }),

/***/ "./src/app/theme-provider/theme-provider.component.css":
/*!*************************************************************!*\
  !*** ./src/app/theme-provider/theme-provider.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme-provider/theme-provider.component.html":
/*!**************************************************************!*\
  !*** ./src/app/theme-provider/theme-provider.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-data-provider key=\"theme\" [data]=\"{ theme: theme, setTheme: setTheme }\">\n  <ng-content></ng-content>\n</ngx-data-provider>"

/***/ }),

/***/ "./src/app/theme-provider/theme-provider.component.ts":
/*!************************************************************!*\
  !*** ./src/app/theme-provider/theme-provider.component.ts ***!
  \************************************************************/
/*! exports provided: ThemeProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProviderComponent", function() { return ThemeProviderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThemeProviderComponent = /** @class */ (function () {
    function ThemeProviderComponent() {
        var _this = this;
        this.theme = 'dark';
        this.setTheme = function (theme) { return (_this.theme = theme); };
    }
    ThemeProviderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'theme-provider',
            template: __webpack_require__(/*! ./theme-provider.component.html */ "./src/app/theme-provider/theme-provider.component.html"),
            styles: [__webpack_require__(/*! ./theme-provider.component.css */ "./src/app/theme-provider/theme-provider.component.css")]
        })
    ], ThemeProviderComponent);
    return ThemeProviderComponent;
}());



/***/ }),

/***/ "./src/app/themed-button/themed-button.component.css":
/*!***********************************************************!*\
  !*** ./src/app/themed-button/themed-button.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/themed-button/themed-button.component.html":
/*!************************************************************!*\
  !*** ./src/app/themed-button/themed-button.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<theme-consumer>\n  <ng-template let-theme=\"theme\" let-setTheme=\"setTheme\">\n    <button (click)=\"setTheme(theme === 'dark' ? 'light' : 'dark')\">\n      {{theme}}\n    </button>\n  </ng-template>>\n</theme-consumer>"

/***/ }),

/***/ "./src/app/themed-button/themed-button.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/themed-button/themed-button.component.ts ***!
  \**********************************************************/
/*! exports provided: ThemedButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemedButtonComponent", function() { return ThemedButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThemedButtonComponent = /** @class */ (function () {
    function ThemedButtonComponent() {
    }
    ThemedButtonComponent.prototype.ngOnInit = function () { };
    ThemedButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'themed-button',
            template: __webpack_require__(/*! ./themed-button.component.html */ "./src/app/themed-button/themed-button.component.html"),
            styles: [__webpack_require__(/*! ./themed-button.component.css */ "./src/app/themed-button/themed-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThemedButtonComponent);
    return ThemedButtonComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/isaac/Documents/Contributions/ngx-data-provider/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map