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
var itemList_service_1 = require("./itemList.service");
var ItemListComponent = /** @class */ (function () {
    function ItemListComponent(user, menu) {
        this.user = user;
        this.menu = menu;
    }
    ItemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.getMenuList().subscribe(function (menuList) {
            _this.menuItems = _this.menu.getMenuItems();
        });
    };
    ItemListComponent.prototype.onSelect = function (menuItem) {
        this.selectedItem = menuItem;
        this.user.getLoggedInUser();
    };
    ItemListComponent.prototype.createOrder = function () {
        var _this = this;
        this.menu.createOrder(this.user.getLoggedInUser(), this.selectedItem.name, this.selectedItem.quantity.toString()).subscribe(function (menuList) {
            _this.menuItems = _this.menu.getMenuItems();
        });
    };
    ItemListComponent = __decorate([
        core_1.Component({
            selector: 'item-list',
            templateUrl: './itemList.component.html',
            styleUrls: ['./itemList.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, itemList_service_1.MenuService])
    ], ItemListComponent);
    return ItemListComponent;
}());
exports.ItemListComponent = ItemListComponent;
//# sourceMappingURL=itemList.component.js.map