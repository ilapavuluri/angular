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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.isUserLoggedIn = false;
    }
    UserService.prototype.loginUser = function (userName, password) {
        var _this = this;
        var headers = new http_1.Headers({ 'content-type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        var loginInfo = { username: userName, password: password };
        var body = new http_1.URLSearchParams();
        body.set('username', userName.toString());
        body.set('password', password.toString());
        return this.http.post('http://localhost:8083/hotel-services/webapi/user/login', body.toString(), { headers: new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) }).map(function (response) {
            if (response.status === 200) {
                var res = response.json();
                if (res !== null && res !== undefined) {
                    _this.SetUserLoggedIn(true);
                    _this.setLoggedInUser(res.username);
                    return true;
                }
                else {
                    return false;
                }
                //here based on the status we are returing true or false in general we gets the response.json() and returns that.
            }
            else {
                return false;
            }
        }).catch(this.handleError);
    };
    UserService.prototype.SetUserLoggedIn = function (userLoggedIn) {
        this.isUserLoggedIn = userLoggedIn;
    };
    UserService.prototype.setLoggedInUser = function (userName) {
        this.username = userName;
    };
    UserService.prototype.getLoggedInUser = function () {
        return this.username;
    };
    UserService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error.statusText);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map