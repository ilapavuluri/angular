"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../login-form/user.service");
var orderList_service_1 = require("./orderList.service");
var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(user, order) {
        this.user = user;
        this.order = order;
    }
    OrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.order.getOrders().subscribe(function (orderList) {
            _this.orderList = _this.order.getOrderList();
        });
    };
    OrderListComponent = __decorate([
        core_1.Component({
            selector: 'order-list',
            templateUrl: './orderList.component.html'
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, orderList_service_1.OrderService])
    ], OrderListComponent);
    return OrderListComponent;
}());
exports.OrderListComponent = OrderListComponent;
//# sourceMappingURL=orderList.component.js.map