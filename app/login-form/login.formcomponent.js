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
var router_1 = require("@angular/router");
var user_service_1 = require("./user.service");
var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(router, user) {
        this.router = router;
        this.user = user;
        this.username = '';
        this.password = '';
        this.loginInvalid = false;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.getUser = function () {
        return this.user;
    };
    LoginFormComponent.prototype.loginUser = function (e) {
        var _this = this;
        console.log(e);
        var userName = this.username;
        var password = this.password;
        this.user.loginUser(userName, password).subscribe(function (isUserLoggedIn) {
            if (isUserLoggedIn) {
                _this.router.navigate(['dashboard']);
            }
        });
    };
    LoginFormComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: './login.form.component.html',
            styleUrls: ['./login.form.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login.formcomponent.js.map