(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-nav></app-top-nav>\n<app-main-display></app-main-display>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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

// logomakr.com/5uIvKK
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontbits';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-nav/top-nav.component */ "./src/app/top-nav/top-nav.component.ts");
/* harmony import */ var _main_display_main_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-display/main-display.component */ "./src/app/main-display/main-display.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _main_display_ask_the_bot_ask_the_bot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-display/ask-the-bot/ask-the-bot.component */ "./src/app/main-display/ask-the-bot/ask-the-bot.component.ts");
/* harmony import */ var _main_display_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-display/about-me/about-me.component */ "./src/app/main-display/about-me/about-me.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_display_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-display/projects/projects.component */ "./src/app/main-display/projects/projects.component.ts");
/* harmony import */ var _main_display_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-display/skills/skills.component */ "./src/app/main-display/skills/skills.component.ts");
/* harmony import */ var _main_display_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-display/contacts/contacts.component */ "./src/app/main-display/contacts/contacts.component.ts");
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/web-socket.service */ "./src/app/services/web-socket.service.ts");
/* harmony import */ var _services_mybits_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/mybits.service */ "./src/app/services/mybits.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: _main_display_ask_the_bot_ask_the_bot_component__WEBPACK_IMPORTED_MODULE_7__["AskTheBotComponent"] },
    { path: 'about', component: _main_display_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__["AboutMeComponent"] },
    { path: 'projects', component: _main_display_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"] },
    { path: 'skills', component: _main_display_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"] },
    { path: 'contacts', component: _main_display_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"] },
    { path: "**", redirectTo: '/', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_4__["TopNavComponent"],
                _main_display_main_display_component__WEBPACK_IMPORTED_MODULE_5__["MainDisplayComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _main_display_ask_the_bot_ask_the_bot_component__WEBPACK_IMPORTED_MODULE_7__["AskTheBotComponent"],
                _main_display_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__["AboutMeComponent"],
                _main_display_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"],
                _main_display_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"],
                _main_display_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_services_web_socket_service__WEBPACK_IMPORTED_MODULE_13__["WebSocketService"], _services_mybits_service__WEBPACK_IMPORTED_MODULE_14__["MyBitsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <p class=\"eightbits\">Thanks for coming by!</p>\n  <!-- <a href=\"#\"><i class=\"fa fa-linkedin-square\"></i></a>\n  <a href=\"#\"><i class=\"fa fa-medium\"></i></a>\n  <a href=\"#\"><i class=\"fa fa-github\"></i></a>\n  <a href=\"#\"><i class=\"fa fa-at\"></i></a> -->\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".eightbits {\n  font-family: 'Press Start 2P', cursive;\n  color: #22b455;\n  letter-spacing: -1px; }\n\n.footer {\n  border-top: 1px solid white;\n  border-bottom: 1px solid white;\n  color: white;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #82d08a; }\n\na:visited {\n  color: white; }\n\na {\n  display: block;\n  height: 4vh;\n  margin: 0 10%; }\n\np.eightbits {\n  margin: 1vh 0;\n  color: white;\n  font-size: 0.8em; }\n\n@media screen and (max-width: 600px) {\n  p.eightbits {\n    font-size: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ3AvRG9jdW1lbnRzL2dpdC9teWJpdHMvbXliaXRzL2JhY2tiaXRzL2Zyb250Yml0cy9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUVuQixtQkFBbUIsRUFBQTs7QUFJdkI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFFSTtJQUNJLGVBQWUsRUFBQSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWlnaHRiaXRzIHtcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzIyYjQ1NTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDsgXG59XG5cbi5mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZDogIzUwYWU1NDtcbiAgICBiYWNrZ3JvdW5kOiAjODJkMDhhO1xuICAgIC8vIGhlaWdodDogMy41dmg7XG59XG5cbmE6dmlzaXRlZCB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5hIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDR2aDtcbiAgICBtYXJnaW46IDAgMTAlO1xufVxuXG5wLmVpZ2h0Yml0cyB7XG4gICAgbWFyZ2luOiAxdmggMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBcbiAgICBwLmVpZ2h0Yml0cyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gICAgXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/main-display/about-me/about-me.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main-display/about-me/about-me.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"display-title eightbits\">{{displayTitle}}</h2>\n\n<div *ngIf=\"!loading; else loadingData\">\n  <div *ngIf=\"!hasError; else errorData\">\n\n    <div class=\"inner-display-about-me\">\n      <div class=\"about-me-picture-container\">\n        <img src=\"{{ aboutMe.imageUrl }}\" class=\"about-me-pic\">\n\n        <p class=\"eightbits about-me-pic-desc\"><span class=\"about-me-tag\">* Name:</span>{{ aboutMe.firstName }}\n          {{aboutMe.lastName }}</p>\n        <br>\n        <p class=\"eightbits about-me-pic-desc\"><span class=\"about-me-tag\">* Age:</span>{{ aboutMe.age }}</p>\n        <br>\n        <p class=\"eightbits about-me-pic-desc\"><span class=\"about-me-tag\">* City:</span>{{ aboutMe.city }}</p>\n        <br>\n        <p class=\"eightbits about-me-pic-desc\"><span class=\"about-me-tag\">* Marital status:</span>{{ aboutMe.maritalStatus }}</p>\n        <br>\n        <p class=\"eightbits about-me-pic-desc\"><span class=\"about-me-tag\">* Languages:</span>{{ aboutMe.languages }}</p>\n        <br>\n        <p class=\"eightbits about-me-pic-desc\"><span class=\"about-me-tag\">--> Resume:</span><a href=\"{{ aboutMe.resumeUrl }}\"\n            download>igp_resume.pdf</a></p>\n      </div>\n\n      <div class=\"about-me-text-container\">\n        <p>\n          {{ aboutMe.description }}\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #errorData>\n    <p class=\"eightbits middle\">\n      An error occurred here :(!\n    </p>\n  </ng-template>\n</div>\n\n<ng-template #loadingData>\n  <p class=\"eightbits middle\">\n    Loading data...\n  </p>\n</ng-template>\n\n<!-- <div class=\"about-me-picture-container\">\n    <img src=\"/static/backbits/igp.jpeg\" class=\"about-me-pic\">\n\n    <p class=\"eightbits about-me-pic-desc\"><span class=\"about-me-tag\">* Name:</span>Igor G. Peternella</p>\n    <br>\n    <p class=\"eightbits about-me-pic-desc\"><span class=\"about-me-tag\">* Age:</span> 27</p>\n    <br>\n    <p class=\"eightbits about-me-pic-desc\"><span class=\"about-me-tag\">* City:</span> São Paulo</p>\n    <br>\n    <p class=\"eightbits about-me-pic-desc\"><span class=\"about-me-tag\">* Marital status:</span>Single</p>\n    <br>\n    <p class=\"eightbits about-me-pic-desc\"><span class=\"about-me-tag\">* Languages:</span>English, German, Portuguese</p>\n    <br>\n    <p class=\"eightbits about-me-pic-desc\"><span class=\"about-me-tag\">Resume: </span><a href=\"#\" download>igp.pdf</a></p>\n</div>\n\n<div class=\"about-me-text-container\">\n  <p>\n    I'd define myself as a language-agnostic developer who loves learning new technologies! I see programming\n    languages as tools and I love learning new ones to use them where they excel. Moreover, I've always been a\n    self-taught person and this makes learning new things on the fly something that I'm very comfortable with.\n  </p\n</div>\n-->\n"

/***/ }),

/***/ "./src/app/main-display/about-me/about-me.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/main-display/about-me/about-me.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".eightbits {\n  font-family: 'Press Start 2P', cursive;\n  color: #22b455;\n  letter-spacing: -1px; }\n\nh2.display-title {\n  text-align: center;\n  position: relative;\n  margin: 2% auto;\n  font-size: 50px; }\n\n.inner-display-about-me {\n  display: flex;\n  flex-direction: row; }\n\n.middle {\n  font-size: 1.5em;\n  margin: 0 auto; }\n\n.about-me-picture-container {\n  width: 25%;\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  word-wrap: break-word; }\n\n.about-me-picture-container p {\n    width: 100%;\n    margin: -2% 2% 0 7%;\n    font-size: 10px; }\n\n.about-me-picture-container img {\n    height: 20vh;\n    min-height: 150px;\n    width: 80%;\n    border-radius: 15px;\n    margin: 0 0 30px 7%; }\n\n.about-me-picture-container .about-me-tag {\n    color: white;\n    margin-right: 1%; }\n\n.about-me-text-container {\n  height: 55vh;\n  width: 80%;\n  padding: 0 2% 0 2%; }\n\n.about-me-text-container p {\n    color: white;\n    font-size: 20px;\n    word-break: break-word; }\n\n@media screen and (max-width: 700px) {\n  .about-me-picture-container p {\n    font-size: 7px;\n    margin: -5% 0 0 2%; }\n  .about-me-text-container p {\n    font-size: 12px; } }\n\n@media screen and (max-width: 500px) {\n  .about-me-picture-container {\n    width: 30%; }\n    .about-me-picture-container p {\n      font-size: 5px;\n      margin: -5% 0 0 2%; }\n  .about-me-text-container p {\n    margin: 0 0 0 2%;\n    font-size: 9px; }\n  h2.display-title {\n    font-size: 30px; } }\n\n@-webkit-keyframes slideInFromLeft {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n@keyframes slideInFromLeft {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\nh2.eightbits.display-title {\n  -webkit-animation: 1s ease-out 0s 1 slideInFromLeft;\n          animation: 1s ease-out 0s 1 slideInFromLeft; }\n\nimg.about-me-pic {\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-animation: scale 1s ease-in-out forwards;\n          animation: scale 1s ease-in-out forwards; }\n\n@-webkit-keyframes scale {\n  to {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); } }\n\n@keyframes scale {\n  to {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); } }\n\n/* width */\n\n::-webkit-scrollbar {\n  width: 10px; }\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #1d2125; }\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #12e25a; }\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ3AvRG9jdW1lbnRzL2dpdC9teWJpdHMvbXliaXRzL2JhY2tiaXRzL2Zyb250Yml0cy9zcmMvYXBwL21haW4tZGlzcGxheS9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFzQztFQUN0QyxjQUFjO0VBQ2Qsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUduQjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdoQjtFQUNJLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixxQkFBcUIsRUFBQTs7QUFMekI7SUFRUSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTs7QUFWdkI7SUFjUSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUE7O0FBbEIzQjtJQXNCUSxZQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksWUFBWTtFQUVaLFVBQVU7RUFDVixrQkFBa0IsRUFBQTs7QUFKdEI7SUFPUSxZQUFZO0lBQ1osZUFBZTtJQUNmLHNCQUFzQixFQUFBOztBQUk5QjtFQUNJO0lBR1EsY0FBYztJQUNkLGtCQUFrQixFQUFBO0VBSTFCO0lBRVEsZUFBZSxFQUFBLEVBQ2xCOztBQUlUO0VBQ0k7SUFDSSxVQUFVLEVBQUE7SUFEZDtNQUlRLGNBQWM7TUFDZCxrQkFBa0IsRUFBQTtFQUkxQjtJQUVRLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7RUFJdEI7SUFDSSxlQUFlLEVBQUEsRUFDbEI7O0FBSUw7RUFDRTtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQTtFQUU5QjtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQSxFQUFBOztBQUw1QjtFQUNFO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBO0VBRTlCO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBLEVBQUE7O0FBSTVCO0VBQ0UsbURBQTJDO1VBQTNDLDJDQUEyQyxFQUFBOztBQUk3QztFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsZ0RBQXdDO1VBQXhDLHdDQUF3QyxFQUFBOztBQUcxQztFQUNFO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQixFQUFBLEVBQUE7O0FBRjFCO0VBQ0U7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCLEVBQUEsRUFBQTs7QUFJMUIsVUFBQTs7QUFDQTtFQUNJLFdBQVcsRUFBQTs7QUFHZixVQUFBOztBQUNBO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCLFdBQUE7O0FBQ0E7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkIsb0JBQUE7O0FBQ0E7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4tZGlzcGxheS9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5laWdodGJpdHMge1xuICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjMjJiNDU1O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4OyBcbn1cblxuaDIuZGlzcGxheS10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDIlIGF1dG87XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uaW5uZXItZGlzcGxheS1hYm91dC1tZSB7XG4gICAgZGlzcGxheTogZmxleDsgIFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5taWRkbGUge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFib3V0LW1lLXBpY3R1cmUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICAgIHAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAtMiUgMiUgMCA3JTtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMjB2aDtcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHg7ICAvLyBuZWNlc3NhcnkgZm9yIHNtYWxsIGhlaWdodHNcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgbWFyZ2luOiAwIDAgMzBweCA3JTtcbiAgICB9XG5cbiAgICAuYWJvdXQtbWUtdGFnIHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgfVxufVxuXG4uYWJvdXQtbWUtdGV4dC1jb250YWluZXIge1xuICAgIGhlaWdodDogNTV2aDtcbiAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHdpZHRoOiA4MCU7ICAgXG4gICAgcGFkZGluZzogMCAyJSAwIDIlO1xuXG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAuYWJvdXQtbWUtcGljdHVyZS1jb250YWluZXIge1xuICAgICAgICBcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDdweDtcbiAgICAgICAgICAgIG1hcmdpbjogLTUlIDAgMCAyJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuYWJvdXQtbWUtdGV4dC1jb250YWluZXIge1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAuYWJvdXQtbWUtcGljdHVyZS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbjogLTUlIDAgMCAyJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuYWJvdXQtbWUtdGV4dC1jb250YWluZXIge1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMiU7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGgyLmRpc3BsYXktdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufVxuXG4vLyBhbmltYXRpb25zXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Gcm9tTGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG5oMi5laWdodGJpdHMuZGlzcGxheS10aXRsZSB7XG4gIGFuaW1hdGlvbjogMXMgZWFzZS1vdXQgMHMgMSBzbGlkZUluRnJvbUxlZnQ7XG4gIFxufVxuXG5pbWcuYWJvdXQtbWUtcGljIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgc2NhbGUge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxufVxuXG4vKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEwcHg7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWQyMTI1OyBcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTJlMjVhOyBcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1OyBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main-display/about-me/about-me.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main-display/about-me/about-me.component.ts ***!
  \*************************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_mybits_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mybits.service */ "./src/app/services/mybits.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent(myBitsService) {
        this.myBitsService = myBitsService;
        this.displayTitle = "About me";
        this.hasError = false;
        this.loading = true;
    }
    AboutMeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myBitsService.getSomeBitsAboutMe("aboutMe").subscribe(function (response) {
            var rawHttpResponseBody = response.body;
            rawHttpResponseBody.forEach(function (aboutMe) {
                _this.aboutMe = {
                    firstName: aboutMe["first_name"],
                    lastName: aboutMe["last_name"],
                    city: aboutMe["city"],
                    age: aboutMe["age"],
                    maritalStatus: aboutMe["marital_status"],
                    languages: aboutMe["languages"],
                    description: aboutMe["description"],
                    imageUrl: aboutMe["image_url"],
                    resumeUrl: aboutMe["resume_url"],
                };
            });
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            _this.hasError = true;
            // logging when not in production
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
                console.log("Uh-oh! An exception was raised: [Status Code]:" + err["status"] + ", [Response]: " + err["statusText"]);
            }
        });
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/main-display/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.scss */ "./src/app/main-display/about-me/about-me.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_mybits_service__WEBPACK_IMPORTED_MODULE_1__["MyBitsService"]])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/main-display/ask-the-bot/ask-the-bot.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main-display/ask-the-bot/ask-the-bot.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title-and-gif-container\">\n  <h2 class=\"eightbits display-title\">{{displayTitle}}</h2>\n</div>\n\n<div class=\"inner-display\">\n  <div class=\"inner-display-img-area\">\n    <!-- <img src=\"/static/backbits/bot_still.png\"> -->\n    <img [src]=\"botImg\" width=\"25\">\n    <p class=\"eightbits\" id=\"chat-bot-desc\">Igor's bot</p>\n  </div>\n\n  <div class=\"inner-display-text-area\">\n    <p class=\"eightbits chat-user-desc\">Me:</p>\n    <p class=\"speech-bubble eightbits\" [textContent]=\"botMsg\">\n      <!-- Hey there! I'm a bot version of myself! I can understand a couple of commands\n      so we can talk here! Get to know a little bit about be by typing questions such\n      as how old are you, where do you live, etc! Oh yes, if you enjoy the conversation\n      you can ask about my contacts too! -->\n    </p>\n\n    <p class=\"eightbits chat-user-desc\">You:</p>\n    <textarea class=\"user-input-text speech-bubble-user eightbits\" [(ngModel)]=\"chatMsg\"></textarea>\n\n    <button class=\"start-button eightbits\" (click)=\"sendMsg()\">SEND</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main-display/ask-the-bot/ask-the-bot.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/main-display/ask-the-bot/ask-the-bot.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".eightbits {\n  font-family: 'Press Start 2P', cursive;\n  color: #42f719;\n  letter-spacing: -1px; }\n\nh2.display-title {\n  text-align: center;\n  position: relative;\n  margin: 2% 0 2% 0;\n  font-size: 50px; }\n\n.chat-user-dec {\n  color: #21ff0b; }\n\n.title-and-gif-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\n.title-and-gif-container img {\n    padding: 0.5%;\n    background: #1b0f18;\n    margin: 2% 4%;\n    width: 20%;\n    height: 12vh;\n    min-height: 40px;\n    border-radius: 20px; }\n\n.inner-display {\n  display: flex;\n  flex-direction: row; }\n\n.inner-display-text-area {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-right: 5%;\n  width: 70%; }\n\n.inner-display-img-area {\n  margin-top: 5vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 40%; }\n\n.inner-display-img-area p.eightbits {\n  text-align: center;\n  font-size: 15px; }\n\n.inner-display-text-area p {\n  margin: 1%; }\n\n.inner-display-button-area {\n  margin: 2% auto 0 auto; }\n\n.inner-display-img-area img {\n  width: 90%;\n  min-height: 200px; }\n\n.inner-display-img-area p {\n  font-size: 20px;\n  margin: 0; }\n\n.start-button {\n  margin: 3% 0 3% 60%;\n  font-size: 1.0em;\n  width: auto;\n  color: black;\n  border: 1px gray solid;\n  background: #22b455;\n  padding: 5px; }\n\n.start-button:hover {\n  background: #1bdb5e; }\n\n.speech-bubble {\n  margin: 0px;\n  min-height: 80px;\n  background: #0f110f;\n  border-radius: 10px;\n  border: 1px solid green;\n  overflow-y: auto;\n  color: #0ff359; }\n\np.speech-bubble {\n  padding: 2% 4%;\n  min-height: 100px; }\n\np.speech-bubble.eightbits {\n  margin: 0px; }\n\n.bot-answer-area p {\n  margin: 1vh 0; }\n\n.speech-bubble-user {\n  font-size: 1.0em;\n  padding: 2% 4%;\n  position: relative;\n  background: #0e0b0e;\n  border-radius: 10px;\n  border: 1px solid green; }\n\n.user-input-text {\n  min-height: 100px;\n  color: white;\n  font-size: 1.0em; }\n\n@media screen and (max-width: 800px) {\n  .title-and-gif-container h2.display-title {\n    margin: 5% auto; }\n  .title-and-gif-container img {\n    width: 15%; } }\n\n@media screen and (max-width: 600px) {\n  p#chat-bot-desc {\n    font-size: 10px; }\n  .title-and-gif-container h2.display-title {\n    font-size: 30px; }\n  .user-input-text {\n    font-size: 12px; }\n  p.speech-bubble {\n    font-size: 12px; } }\n\n@media screen and (min-width: 900px) {\n  .inner-display-text-area {\n    width: 70%; }\n  .inner-display-img-area {\n    width: 30%;\n    height: 40vh;\n    margin-top: 0; }\n  .inner-display-img-area p.eightbits {\n    font-size: 20px; } }\n\n@media screen and (min-width: 800px) {\n  .start-button {\n    font-size: 20px;\n    padding: 10px;\n    margin: 2% 0 2% 70%;\n    width: auto; } }\n\ntextarea:focus, input:focus {\n  outline: none; }\n\np#chat-bot-desc {\n  color: white; }\n\n@-webkit-keyframes slideInFromLeft {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n@keyframes slideInFromLeft {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\nh2.eightbits.display-title {\n  -webkit-animation: 0.5s ease-out 0s 1 slideInFromLeft;\n          animation: 0.5s ease-out 0s 1 slideInFromLeft; }\n\n.inner-display-img-area img {\n  -webkit-animation: jump 1.5s ease 0s 1 normal;\n  animation: jump 1.5s ease 0s 1 normal; }\n\n@-webkit-keyframes jump {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  20% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px); }\n  50% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  60% {\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px); }\n  80% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\np.speech-bubble.eightbits {\n  width: 100%;\n  -webkit-animation: type 0.6s steps(60, end);\n          animation: type 0.6s steps(60, end); }\n\n@-webkit-keyframes type {\n  from {\n    width: 5px; } }\n\n@keyframes type {\n  from {\n    width: 5px; } }\n\n/* width */\n\n::-webkit-scrollbar {\n  width: 10px; }\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #1d2125;\n  border-radius: 10px; }\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #42f719;\n  border-radius: 10px; }\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ3AvRG9jdW1lbnRzL2dpdC9teWJpdHMvbXliaXRzL2JhY2tiaXRzL2Zyb250Yml0cy9zcmMvYXBwL21haW4tZGlzcGxheS9hc2stdGhlLWJvdC9hc2stdGhlLWJvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFzQztFQUN0QyxjQUFjO0VBQ2Qsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUluQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFKdkI7SUFPUSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTs7QUFJM0I7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixVQUFVLEVBQUE7O0FBSWQ7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxlQUFlO0VBQ2YsU0FBUyxFQUFBOztBQUdiO0VBQ0ksbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDbkIsbUJBQW1CO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGdCQUFnQjtFQUNoQixjQUFjO0VBRWpCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0k7SUFFUSxlQUFlLEVBQUE7RUFGdkI7SUFNUSxVQUNKLEVBQUEsRUFBQzs7QUFLVDtFQUVJO0lBQ0ksZUFBZSxFQUFBO0VBR25CO0lBRVEsZUFBZSxFQUFBO0VBSXZCO0lBQ0ksZUFBZSxFQUFBO0VBR25CO0lBQ0ksZUFBZSxFQUFBLEVBQ2xCOztBQUlMO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFHZDtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYSxFQUFBO0VBR2pCO0lBQ0ksZUFBZSxFQUFBLEVBQ2xCOztBQUdMO0VBQ0k7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXLEVBQUEsRUFDZDs7QUFHTDtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZLEVBQUE7O0FBSWhCO0VBQ0U7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCLEVBQUE7RUFFOUI7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUEsRUFBQTs7QUFMNUI7RUFDRTtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQTtFQUU5QjtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQSxFQUFBOztBQUk1QjtFQUNFLHFEQUE2QztVQUE3Qyw2Q0FBNkMsRUFBQTs7QUFHL0M7RUFDSSw2Q0FBOEM7RUFDOUMscUNBQXNDLEVBQUE7O0FBUTFDO0VBQ0U7SUFDRSxnQ0FBZ0M7SUFDaEMsd0JBQXdCLEVBQUE7RUFFMUI7SUFDRSxnQ0FBZ0M7SUFDaEMsd0JBQXdCLEVBQUE7RUFFMUI7SUFDRSxvQ0FBb0M7SUFDcEMsNEJBQTRCLEVBQUE7RUFFOUI7SUFDRSxnQ0FBZ0M7SUFDaEMsd0JBQXdCLEVBQUE7RUFFMUI7SUFDRSxvQ0FBb0M7SUFDcEMsNEJBQTRCLEVBQUE7RUFFOUI7SUFDRSxnQ0FBZ0M7SUFDaEMsd0JBQXdCLEVBQUE7RUFFMUI7SUFDRSxnQ0FBZ0M7SUFDaEMsd0JBQXdCLEVBQUEsRUFBQTs7QUFJNUI7RUFDRSxXQUFXO0VBQ1gsMkNBQW1DO1VBQW5DLG1DQUFtQyxFQUFBOztBQUdyQztFQUNFO0lBQU8sVUFBVSxFQUFBLEVBQUE7O0FBRG5CO0VBQ0U7SUFBTyxVQUFVLEVBQUEsRUFBQTs7QUFJbkIsVUFBQTs7QUFDQTtFQUNJLFdBQVcsRUFBQTs7QUFHZixVQUFBOztBQUNBO0VBQ0ksbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUd2QixXQUFBOztBQUNBO0VBQ0ksbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUd2QixvQkFBQTs7QUFDQTtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1kaXNwbGF5L2Fzay10aGUtYm90L2Fzay10aGUtYm90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVpZ2h0Yml0cyB7XG4gICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XG4gICAgY29sb3I6ICM0MmY3MTk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7IFxufVxuXG5oMi5kaXNwbGF5LXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMiUgMCAyJSAwO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuXG4uY2hhdC11c2VyLWRlYyB7XG4gICAgY29sb3I6ICMyMWZmMGI7XG59XG5cbi50aXRsZS1hbmQtZ2lmLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgICBwYWRkaW5nOiAwLjUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMWIwZjE4O1xuICAgICAgICBtYXJnaW46IDIlIDQlO1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICBoZWlnaHQ6IDEydmg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxufVxuXG4uaW5uZXItZGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uaW5uZXItZGlzcGxheS10ZXh0LWFyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICB3aWR0aDogNzAlO1xufVxuXG4uaW5uZXItZGlzcGxheS1pbWctYXJlYSB7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgLy8gaGVpZ2h0OiAzMHZoO1xufVxuXG4uaW5uZXItZGlzcGxheS1pbWctYXJlYSBwLmVpZ2h0Yml0cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmlubmVyLWRpc3BsYXktdGV4dC1hcmVhIHAge1xuICAgIG1hcmdpbjogMSU7XG59XG5cbi5pbm5lci1kaXNwbGF5LWJ1dHRvbi1hcmVhIHtcbiAgICBtYXJnaW46IDIlIGF1dG8gMCBhdXRvO1xufVxuXG4uaW5uZXItZGlzcGxheS1pbWctYXJlYSBpbWcge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG59XG5cbi5pbm5lci1kaXNwbGF5LWltZy1hcmVhIHAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5zdGFydC1idXR0b24ge1xuICAgIG1hcmdpbjogMyUgMCAzJSA2MCU7XG4gICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAxcHggZ3JheSBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kOiAjMjJiNDU1O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnN0YXJ0LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzFiZGI1ZTtcbn1cblxuLnNwZWVjaC1idWJibGUge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG5cdGJhY2tncm91bmQ6ICMwZjExMGY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGNvbG9yOiAjMGZmMzU5O1xufVxuXG5wLnNwZWVjaC1idWJibGUge1xuICAgIHBhZGRpbmc6IDIlIDQlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuXG5wLnNwZWVjaC1idWJibGUuZWlnaHRiaXRzIHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmJvdC1hbnN3ZXItYXJlYSBwIHtcbiAgICBtYXJnaW46IDF2aCAwO1xufVxuXG4uc3BlZWNoLWJ1YmJsZS11c2VyIHtcbiAgICBmb250LXNpemU6IDEuMGVtO1xuICAgIHBhZGRpbmc6IDIlIDQlOyAgICAgICAgXG4gICAgLy8gaGVpZ2h0OiAxNXZoO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJhY2tncm91bmQ6ICMwZTBiMGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbn1cblxuLnVzZXItaW5wdXQtdGV4dCB7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4wZW07XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAudGl0bGUtYW5kLWdpZi1jb250YWluZXIge1xuICAgICAgICBoMi5kaXNwbGF5LXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogNSUgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTUlXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICAgIHAjY2hhdC1ib3QtZGVzYyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLnRpdGxlLWFuZC1naWYtY29udGFpbmVyIHtcbiAgICAgICAgaDIuZGlzcGxheS10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudXNlci1pbnB1dC10ZXh0IHsgICAgICAgIFxuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgcC5zcGVlY2gtYnViYmxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAgIC5pbm5lci1kaXNwbGF5LXRleHQtYXJlYSB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuXG4gICAgLmlubmVyLWRpc3BsYXktaW1nLWFyZWEge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBoZWlnaHQ6IDQwdmg7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgLmlubmVyLWRpc3BsYXktaW1nLWFyZWEgcC5laWdodGJpdHMge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAgIC5zdGFydC1idXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMiUgMCAyJSA3MCU7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbn1cblxudGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbnAjY2hhdC1ib3QtZGVzYyB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vLyBhbmltYXRpb25zXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Gcm9tTGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG5oMi5laWdodGJpdHMuZGlzcGxheS10aXRsZSB7XG4gIGFuaW1hdGlvbjogMC41cyBlYXNlLW91dCAwcyAxIHNsaWRlSW5Gcm9tTGVmdDtcbn1cblxuLmlubmVyLWRpc3BsYXktaW1nLWFyZWEgaW1nIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjoganVtcCAxLjVzIGVhc2UgMHMgMSBub3JtYWwgO1xuICAgIGFuaW1hdGlvbjoganVtcCAxLjVzIGVhc2UgMHMgMSBub3JtYWwgO1xufVxuXG4vLyAuaW5uZXItZGlzcGxheS1pbWctYXJlYTpob3ZlciB7XG4vLyAgICAgLXdlYmtpdC1hbmltYXRpb246IGp1bXAgMS41cyBlYXNlIDBzIDIgbm9ybWFsIDtcbi8vICAgICBhbmltYXRpb246IGp1bXAgMS41cyBlYXNlIDBzIDIgbm9ybWFsIDtcbi8vICB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyBqdW1wIHtcbiAgMCV7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDIwJXtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgNDAle1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICB9XG4gIDUwJXtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgNjAle1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xuICB9XG4gIDgwJXtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJXtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gfVxufVxuXG5wLnNwZWVjaC1idWJibGUuZWlnaHRiaXRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFuaW1hdGlvbjogdHlwZSAwLjZzIHN0ZXBzKDYwLCBlbmQpOyBcbn1cblxuQGtleWZyYW1lcyB0eXBleyBcbiAgZnJvbSB7IHdpZHRoOiA1cHg7IH0gXG59IFxuXG5cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTBweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICMxZDIxMjU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDJmNzE5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzU1NTsgXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main-display/ask-the-bot/ask-the-bot.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main-display/ask-the-bot/ask-the-bot.component.ts ***!
  \*******************************************************************/
/*! exports provided: AskTheBotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskTheBotComponent", function() { return AskTheBotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/web-socket.service */ "./src/app/services/web-socket.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AskTheBotComponent = /** @class */ (function () {
    /**
     * Builds an ask the bot component with a chat service.
     *
     * @param ChatService - The chat service injected by Anguklar's DI system
    */
    function AskTheBotComponent(webSocketService) {
        this.webSocketService = webSocketService;
        // config variables for animation in ms
        this.blinkAnimationTime = 800;
        this.talkAnimationTime = 100;
        // img URLs for animation purposes
        this.botImgStillUrl = "/static/backbits/bot_still.png";
        this.botImgBlinkingUrl = "/static/backbits/bot_blinking.png";
        this.botImgTalkinglUrl = "/static/backbits/bot_talking.png";
        this.initialMsg = "Hey there! I'm Igor's bot! You can ask me some questions to know a bit more about me!";
        this.chatUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].WS_CHAT_URL;
        this.displayTitle = "A-bot me!";
        this.chatMsg = "";
        this.botMsg = this.initialMsg; // default initial value
        this.botImg = this.botImgStillUrl; // default img value
        this.botImgAnimation = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, this.blinkAnimationTime); // animation timers
        this.botTalkingAnimation = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, this.talkAnimationTime); // animation timers
        this.isBotTalking = false;
    }
    /**
     * Initialization code for Angular's component and subscription
     * to the animation and web socket chat services.
     */
    AskTheBotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webSocket = this.webSocketService.connect(this.chatUrl);
        // must subscribe
        this.webSocket.subscribe({
            next: function (msg) {
                _this.handleChatBotSocketMsg(msg["data"]);
            },
            error: function (err) { return console.error('something wrong occurred: ' + err); },
            complete: function () { return console.log('done'); },
        });
        // bot animation subscription
        this.botImgAnimation.subscribe(function (tick) {
            // does nothing if the bot is talking
            if (!_this.isBotTalking) {
                _this.swapBotImage(_this.botImgStillUrl, _this.botImgBlinkingUrl);
            }
        });
        // bot animation subscription
        this.botTalkingAnimation.subscribe(function (tick) {
            // only if the bot is talking
            if (_this.isBotTalking) {
                _this.swapBotImage(_this.botImgStillUrl, _this.botImgTalkinglUrl);
            }
        });
    };
    /**
     * Sends new user question messages to the chat bot backend.
     */
    AskTheBotComponent.prototype.sendMsg = function () {
        // sends new msg event to the socket
        this.webSocket.next(this.chatMsg);
        // clears chatMsg
        this.chatMsg = "";
    };
    /**
     * Swaps the bot's image in order to animate it.
     *
     * @param imageUrl1 - URL of the static image of the bot;
     * @param imageUrl2 - URL of another static image of the bot to swap.
     */
    AskTheBotComponent.prototype.swapBotImage = function (imageUrl1, imageUrl2) {
        if (this.botImg == imageUrl1) {
            this.botImg = imageUrl2;
        }
        else {
            this.botImg = imageUrl1;
        }
    };
    /**
     * Changes bot animation state and the chat state as new messages arrive
     * from the socket connection.
     *
     * @param msgData - bot string message received from the socket connection.
     */
    AskTheBotComponent.prototype.handleChatBotSocketMsg = function (msgData) {
        if (msgData === "<start/>") {
            // msg has just arrived
            this.isBotTalking = true;
            this.botMsg = "";
        }
        else if (msgData === "<end/>") {
            // msg is over
            this.isBotTalking = false;
            this.botImg = this.botImgStillUrl;
        }
        else {
            // msg is still coming, append new letters
            this.botMsg += msgData;
        }
    };
    AskTheBotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ask-the-bot',
            template: __webpack_require__(/*! ./ask-the-bot.component.html */ "./src/app/main-display/ask-the-bot/ask-the-bot.component.html"),
            styles: [__webpack_require__(/*! ./ask-the-bot.component.scss */ "./src/app/main-display/ask-the-bot/ask-the-bot.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]])
    ], AskTheBotComponent);
    return AskTheBotComponent;
}());



/***/ }),

/***/ "./src/app/main-display/contacts/contacts.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main-display/contacts/contacts.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title-and-gif-container\">\n  <h2 class=\"eightbits display-title\">{{displayTitle}}</h2>\n</div>\n\n<h3 class=\"subtitle\">Liked my profile? Please, feel free to reach me!</h3>\n\n<div class=\"contacts-container\">\n  <div class=\"contact\">\n    <a href=\"https://www.linkedin.com/in/igor-grillo-peternella/\"><img src=\"/static/backbits/linked_in.svg\"></a>\n  </div>\n\n  <div class=\"contact\">\n    <a href=\"https://github.com/IgooorGP\"><img src=\"/static/backbits/github.svg\"></a>\n  </div>\n\n  <div class=\"contact\">\n    <a href=\"https://medium.com/@igor.feq\"><img src=\"/static/backbits/medium.svg\"></a>\n  </div>\n\n  <div class=\"contact\">\n    <a href=\"mailto:igor.feq@gmail.com\"><img src=\"/static/backbits/email.svg\"></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-display/contacts/contacts.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/main-display/contacts/contacts.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".eightbits {\n  font-family: 'Press Start 2P', cursive;\n  color: #22b455;\n  letter-spacing: -1px; }\n\nh2.display-title {\n  text-align: center;\n  position: relative;\n  margin: 4% 0 2% 0;\n  font-size: 50px;\n  color: #20f1ff; }\n\n.subtitle {\n  color: white;\n  font-size: 1.3em;\n  text-align: center;\n  margin: 1% 0; }\n\n.title-and-gif-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1vh; }\n\n.contacts-container {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 80%; }\n\n.contact {\n  background: #c4f1c9;\n  width: 40%;\n  height: 200px;\n  margin: 2% 5%;\n  border-radius: 10px; }\n\n.contact img {\n    padding: 2% 4%;\n    height: 100%;\n    width: 100%;\n    border-radius: 10px; }\n\n.contact:hover {\n  background-color: #9fcca4; }\n\n@media screen and (max-width: 800px) {\n  .subtitle {\n    font-size: 15px; }\n  .title-and-gif-container h2 {\n    font-size: 1.6em; }\n  .title-and-gif-container img {\n    width: 15%; } }\n\n@-webkit-keyframes slideInFromLeft {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n@keyframes slideInFromLeft {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\nh2.eightbits.display-title {\n  -webkit-animation: 0.5s ease-out 0s 1 slideInFromLeft;\n          animation: 0.5s ease-out 0s 1 slideInFromLeft; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ3AvRG9jdW1lbnRzL2dpdC9teWJpdHMvbXliaXRzL2JhY2tiaXRzL2Zyb250Yml0cy9zcmMvYXBwL21haW4tZGlzcGxheS9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFzQztFQUN0QyxjQUFjO0VBQ2Qsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUx2QjtJQVFRLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQixFQUFBOztBQUkzQjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUVJO0lBQ0ksZUFBZSxFQUFBO0VBR25CO0lBRVEsZ0JBQWdCLEVBQUE7RUFGeEI7SUFNUSxVQUNKLEVBQUEsRUFBQzs7QUFNVDtFQUNFO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBO0VBRTlCO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBLEVBQUE7O0FBTDVCO0VBQ0U7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCLEVBQUE7RUFFOUI7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUEsRUFBQTs7QUFJNUI7RUFDRSxxREFBNkM7VUFBN0MsNkNBQTZDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluLWRpc3BsYXkvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWlnaHRiaXRzIHtcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzIyYjQ1NTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDsgXG59XG5cbmgyLmRpc3BsYXktdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiA0JSAwIDIlIDA7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiAjMjBmMWZmO1xufVxuXG4uc3VidGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDElIDA7XG59XG5cbi50aXRsZS1hbmQtZ2lmLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xufVxuXG4uY29udGFjdHMtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi5jb250YWN0IHtcbiAgICBiYWNrZ3JvdW5kOiAjYzRmMWM5O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtYXJnaW46IDIlIDUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICBpbWcge1xuICAgICAgICBwYWRkaW5nOiAyJSA0JTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG59XG5cbi5jb250YWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZjY2E0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIFxuICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgXG4gICAgLnRpdGxlLWFuZC1naWYtY29udGFpbmVyIHtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTUlXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gYW5pbWF0aW9uc1xuQGtleWZyYW1lcyBzbGlkZUluRnJvbUxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuaDIuZWlnaHRiaXRzLmRpc3BsYXktdGl0bGUge1xuICBhbmltYXRpb246IDAuNXMgZWFzZS1vdXQgMHMgMSBzbGlkZUluRnJvbUxlZnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main-display/contacts/contacts.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main-display/contacts/contacts.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
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

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
        this.displayTitle = "Contact me!";
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/main-display/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/main-display/contacts/contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/main-display/main-display.component.html":
/*!**********************************************************!*\
  !*** ./src/app/main-display/main-display.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/main-display/main-display.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/main-display/main-display.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 65vh;\n  margin: 20px auto;\n  opacity: 0.97;\n  background-color: #061725;\n  border: 1px solid white;\n  border-radius: 10px;\n  overflow: auto; }\n\n.eightbits {\n  font-family: 'Press Start 2P', cursive;\n  color: #22b455;\n  letter-spacing: -1px; }\n\n/* width */\n\n::-webkit-scrollbar {\n  width: 10px; }\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #1d2125; }\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #42f719;\n  border-radius: 10px; }\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ3AvRG9jdW1lbnRzL2dpdC9teWJpdHMvbXliaXRzL2JhY2tiaXRzL2Zyb250Yml0cy9zcmMvYXBwL21haW4tZGlzcGxheS9tYWluLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFZO0VBQ1osaUJBQWlCO0VBRWpCLGFBQWE7RUFHYix5QkFBd0I7RUFFeEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxvQkFBb0IsRUFBQTs7QUFHeEIsVUFBQTs7QUFDQTtFQUNJLFdBQVcsRUFBQTs7QUFHZixVQUFBOztBQUNBO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCLFdBQUE7O0FBQ0E7RUFDSSxtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3ZCLG9CQUFBOztBQUNBO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluLWRpc3BsYXkvbWFpbi1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgLy8gaGVpZ2h0OiA3MHZoO1xuICAgIGhlaWdodDogNjV2aDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcblxuICAgIG9wYWNpdHk6IDAuOTc7XG4gICAgXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAzMDgwNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwNjE3MjU7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZWlnaHRiaXRzIHtcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzIyYjQ1NTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDsgXG59XG5cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTBweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICMxZDIxMjU7IFxufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICM0MmY3MTk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1OyBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main-display/main-display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main-display/main-display.component.ts ***!
  \********************************************************/
/*! exports provided: MainDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDisplayComponent", function() { return MainDisplayComponent; });
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

var MainDisplayComponent = /** @class */ (function () {
    function MainDisplayComponent() {
        this.displayTitle = "About me";
        this.currentDisplay = "askTheBot";
    }
    MainDisplayComponent.prototype.ngOnInit = function () {
    };
    MainDisplayComponent.prototype.getCurrentDisplay = function () {
        return this.currentDisplay;
    };
    MainDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-display',
            template: __webpack_require__(/*! ./main-display.component.html */ "./src/app/main-display/main-display.component.html"),
            styles: [__webpack_require__(/*! ./main-display.component.scss */ "./src/app/main-display/main-display.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainDisplayComponent);
    return MainDisplayComponent;
}());



/***/ }),

/***/ "./src/app/main-display/projects/projects.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main-display/projects/projects.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title-and-gif-container\">\n  <img src=\"/static/backbits/space_invader.gif\">\n  <h2 class=\"eightbits display-title\">{{displayTitle}}</h2>\n  <img src=\"/static/backbits/space_invader.gif\">\n</div>\n\n<div class=\"projects-container\">\n  <div *ngIf=\"!loading; else loadingData\">\n\n    <div *ngIf=\"!hasError; else errorData\">\n      <div *ngFor=\"let project of projectsArray\" class=\"project-container\">\n        <div class=\"project-image-container\">\n          <img src=\"{{ project.imageUrl }}\" class=\" project-picture\">\n        </div>\n\n        <div class=\"project-description-container\">\n          <p class=\"project-description-title eightbits\">\n            {{ project.title }}\n          </p>\n\n          <a href=\"{{ project.websiteLink }}\" class=\"project-description-link\">{{ project.websiteLink }}</a>\n\n          <p class=\"project-description-itself\">\n            {{ project.description }}\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <ng-template #errorData>\n      <p class=\"project-description-title eightbits middle\">\n        An error occurred here :(!\n      </p>\n    </ng-template>\n  </div>\n\n  <ng-template #loadingData>\n    <p class=\"project-description-title eightbits middle\">\n      Loading data...\n    </p>\n  </ng-template>\n</div>\n\n\n<!-- mocks for development -->\n  <!--\n<div class=\"projects-container\">\n\n  <div class=\"project-container\">\n    <div class=\"project-image-container\">\n      <img src=\"/static/backbits/github.svg\" class=\"project-picture\">\n    </div>\n    <div class=\"project-description-container\">\n\n      <p class=\"project-description-title eightbits\">\n        My Project 1\n      </p>\n\n      <a href=\"https://github.com\" class=\"project-description-link\">https://github.com</a>\n\n      <p class=\"project-description-itself\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n        the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and\n        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"project-container\">\n    <div class=\"project-image-container\">\n      <img src=\"/static/backbits/github.svg\" class=\"project-picture\">\n    </div>\n    <div class=\"project-description-container\">\n\n      <p class=\"project-description-title eightbits\">\n        My Project 1\n      </p>\n\n      <a href=\"https://github.com\" class=\"project-description-link\">https://github.com</a>\n\n      <p class=\"project-description-itself\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n        the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and\n        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"project-container\">\n    <div class=\"project-image-container\">\n      <img src=\"/static/backbits/github.svg\" class=\"project-picture\">\n    </div>\n    <div class=\"project-description-container\">\n\n      <p class=\"project-description-title eightbits\">\n        My Project 1\n      </p>\n\n      <a href=\"https://github.com\" class=\"project-description-link\">https://github.com</a>\n\n      <p class=\"project-description-itself\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n        the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and\n        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n      </p>\n    </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/main-display/projects/projects.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/main-display/projects/projects.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul, li {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\n.eightbits {\n  font-family: 'Press Start 2P', cursive;\n  color: #22b455;\n  letter-spacing: -1px; }\n\nh2.display-title {\n  text-align: center;\n  position: relative;\n  margin: 2% auto;\n  font-size: 50px;\n  color: #ebff03; }\n\n.title-and-gif-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1vh; }\n\n.title-and-gif-container img {\n    padding: 0.5%;\n    background: #ebff03;\n    margin: 2% 2%;\n    width: 15%;\n    height: 150px;\n    border-radius: 20px; }\n\n.projects-container {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  height: 45vh; }\n\n.project-container {\n  display: flex;\n  align-items: center;\n  font-size: 10px;\n  margin: 4% 0;\n  min-height: 150px; }\n\n.project-image-container {\n  height: 100%;\n  max-width: 30%;\n  min-width: 100px;\n  min-height: 100px;\n  margin: 0 20px;\n  background: white;\n  border-radius: 10px; }\n\n.project-image-container img {\n    border-radius: 10px;\n    width: 100%;\n    height: 250px; }\n\n.middle {\n  margin: 0 auto;\n  font-size: 1.5em; }\n\n.project-description-container {\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start; }\n\n.project-description-container p {\n    margin: 0; }\n\n.project-description-container p.project-description-title {\n    font-size: 1.5em;\n    margin-bottom: 2vh; }\n\n.project-description-container a.project-description-link {\n    margin-bottom: 1vh; }\n\n.project-description-container p.project-description-itself {\n    color: white;\n    word-break: break-word; }\n\n@media screen and (max-width: 800px) {\n  .title-and-gif-container h2 {\n    font-size: 1.6em; }\n  .title-and-gif-container img {\n    width: 20%; } }\n\n@media screen and (max-width: 500px) {\n  .project-container {\n    margin: 10% 0; }\n  .title-and-gif-container h2.display-title {\n    margin: 10% 0;\n    font-size: 1.6em; }\n  .title-and-gif-container img {\n    display: none; } }\n\n@media screen and (min-width: 600px) {\n  .project-container {\n    font-size: 12px; } }\n\n@media screen and (min-width: 800px) {\n  .project-container {\n    font-size: 15px; } }\n\n@-webkit-keyframes slideInFromLeft {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n@keyframes slideInFromLeft {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\nh2.eightbits.display-title {\n  -webkit-animation: 0.5s ease-out 0s 1 slideInFromLeft;\n          animation: 0.5s ease-out 0s 1 slideInFromLeft; }\n\n/* width */\n\n::-webkit-scrollbar {\n  width: 10px; }\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #1d2125; }\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #ebff03; }\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ3AvRG9jdW1lbnRzL2dpdC9teWJpdHMvbXliaXRzL2JhY2tiaXRzL2Zyb250Yml0cy9zcmMvYXBwL21haW4tZGlzcGxheS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFMdEI7SUFRUSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixVQUFVO0lBRVYsYUFBYTtJQUNiLG1CQUFtQixFQUFBOztBQUszQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBUHZCO0lBVVEsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhLEVBQUE7O0FBSXJCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdsQjtFQUNJLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQix1QkFBdUIsRUFBQTs7QUFMM0I7SUFRUSxTQUFTLEVBQUE7O0FBUmpCO0lBWVEsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBOztBQWIxQjtJQWlCUSxrQkFBa0IsRUFBQTs7QUFqQjFCO0lBcUJRLFlBQVk7SUFDWixzQkFBc0IsRUFBQTs7QUFLOUI7RUFDSTtJQUVRLGdCQUFnQixFQUFBO0VBRnhCO0lBTVEsVUFDSixFQUFBLEVBQUM7O0FBS1Q7RUFDSTtJQUNJLGFBQWEsRUFBQTtFQUdqQjtJQUVRLGFBQWE7SUFDYixnQkFBZ0IsRUFBQTtFQUh4QjtJQU9RLGFBQWEsRUFBQSxFQUNoQjs7QUFJVDtFQUNJO0lBQ0ksZUFBZSxFQUFBLEVBQ2xCOztBQUdMO0VBQ0k7SUFDSSxlQUFlLEVBQUEsRUFDbEI7O0FBSUw7RUFDRTtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQTtFQUU5QjtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQSxFQUFBOztBQUw1QjtFQUNFO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBO0VBRTlCO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBLEVBQUE7O0FBSTVCO0VBQ0UscURBQTZDO1VBQTdDLDZDQUE2QyxFQUFBOztBQUcvQyxVQUFBOztBQUNBO0VBQ0ksV0FBVyxFQUFBOztBQUdmLFVBQUE7O0FBQ0E7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkIsV0FBQTs7QUFDQTtFQUNJLG1CQUFtQixFQUFBOztBQUd2QixvQkFBQTs7QUFDQTtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1kaXNwbGF5L3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwsIGxpIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5laWdodGJpdHMge1xuICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjMjJiNDU1O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4OyBcbn1cblxuaDIuZGlzcGxheS10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDIlIGF1dG87XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiAjZWJmZjAzO1xufVxuXG4udGl0bGUtYW5kLWdpZi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcblxuICAgIGltZyB7XG4gICAgICAgIHBhZGRpbmc6IDAuNSU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlYmZmMDM7XG4gICAgICAgIG1hcmdpbjogMiUgMiU7XG4gICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgIC8vIGhlaWdodDogMTV2aDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG59XG5cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgaGVpZ2h0OiA0NXZoO1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWFyZ2luOiA0JSAwO1xuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuXG4ucHJvamVjdC1pbWFnZS1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICBpbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICB9XG59XG5cbi5taWRkbGUge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLnByb2plY3QtZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICAgIFxuICAgICAgICBcbiAgICBwIHsgXG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBwLnByb2plY3QtZGVzY3JpcHRpb24tdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAydmg7XG4gICAgfVxuXG4gICAgYS5wcm9qZWN0LWRlc2NyaXB0aW9uLWxpbmsge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxdmg7XG4gICAgfVxuXG4gICAgcC5wcm9qZWN0LWRlc2NyaXB0aW9uLWl0c2VsZiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAudGl0bGUtYW5kLWdpZi1jb250YWluZXIge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMCVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIC5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMTAlIDA7XG4gICAgfVxuICAgIFxuICAgIC50aXRsZS1hbmQtZ2lmLWNvbnRhaW5lciB7XG4gICAgICAgIGgyLmRpc3BsYXktdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAxMCUgMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHsgXG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHsgXG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbn1cblxuLy8gYW5pbWF0aW9uc1xuQGtleWZyYW1lcyBzbGlkZUluRnJvbUxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuaDIuZWlnaHRiaXRzLmRpc3BsYXktdGl0bGUge1xuICBhbmltYXRpb246IDAuNXMgZWFzZS1vdXQgMHMgMSBzbGlkZUluRnJvbUxlZnQ7ICBcbn1cblxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogIzFkMjEyNTsgXG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogI2ViZmYwMzsgXG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzU1NTsgXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main-display/projects/projects.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main-display/projects/projects.component.ts ***!
  \*************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_mybits_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mybits.service */ "./src/app/services/mybits.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(myBitsService) {
        this.myBitsService = myBitsService;
        this.projectsArray = [];
        this.displayTitle = "Github Projects";
        this.hasError = false;
        this.loading = true;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myBitsService.getSomeBitsAboutMe("projects").subscribe(function (response) {
            var rawHttpResponseBody = response.body;
            rawHttpResponseBody.forEach(function (project) {
                // creates a typed object of the interface
                var p = {
                    title: project["title"],
                    websiteLink: project["website_link"],
                    description: project["description"],
                    imageUrl: project["image_url"]
                };
                // pushes to the typed array
                _this.projectsArray.push(p);
            });
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            _this.hasError = true;
            // logging when not in production
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
                console.log("Uh-oh! An exception was raised: [Status Code]:" + err["status"] + ", [Response]: " + err["statusText"]);
            }
        });
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/main-display/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/main-display/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_mybits_service__WEBPACK_IMPORTED_MODULE_1__["MyBitsService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/main-display/skills/skills.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main-display/skills/skills.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title-and-gif-container\">\n  <img src=\"/static/backbits/controller.svg\">\n  <h2 class=\"eightbits display-title\">{{displayTitle}}</h2>\n  <img src=\"/static/backbits/controller.svg\">\n</div>\n\n<div class=\"skills-container\">\n\n  <div *ngIf=\"!loading; else loadingData\">\n\n    <div *ngIf=\"!hasError; else errorData\">\n      <div *ngFor=\"let skill of skillsArray\" class=\"skill-container\">\n        <div class=\"skill-image-container\">\n          <img src=\"{{ skill.imageUrl }}\" class=\" skill-picture\">\n        </div>\n\n        <div class=\"skill-description-container\">\n          <p class=\"skill-description-title eightbits\">\n            {{ skill.title }}\n          </p>\n\n          <p class=\"skill-description-level\"><span class=\"level-title\">Level:</span><span class=\"level\">Advanced</span></p>\n\n          <p class=\"skill-description-itself\">\n            {{ skill.description }}\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <ng-template #errorData>\n      <p class=\"skill-description-title eightbits middle\">\n        An error occurred here :(!\n      </p>\n    </ng-template>\n  </div>\n\n  <ng-template #loadingData>\n    <p class=\"skill-description-title eightbits middle\">\n      Loading data...\n    </p>\n  </ng-template>\n</div>\n\n<!-- mocks for development -->\n<!-- \n<div class=\"skills-container\">\n\n  <div class=\"skill-container\">\n    <div class=\"skill-image-container\">\n      <img src=\"/static/backbits/controller.svg\">\n    </div>\n\n    <div class=\"skill-description-container\">\n\n      <p class=\"skill-description-title eightbits\">\n        My Project 1\n      </p>\n\n      <p class=\"project-description-level\"><span class=\"level-title\">Level:</span><span class=\"level\">Advanced</span></p>\n\n      <p class=\"skill-description\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n        the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and\n        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"skill-container\">\n    <div class=\"skill-image-container\">\n      <img src=\"/static/backbits/controller.svg\">\n    </div>\n\n    <div class=\"skill-description-container\">\n\n      <p class=\"skill-description-title eightbits\">\n        My Project 1\n      </p>\n\n      <p class=\"project-description-level\"><span class=\"level-title\">Level:</span><span class=\"level\">Advanced</span></p>\n\n      <p class=\"skill-description\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n        the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and\n        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"skill-container\">\n    <div class=\"skill-image-container\">\n      <img src=\"/static/backbits/controller.svg\">\n    </div>\n\n    <div class=\"skill-description-container\">\n\n      <p class=\"skill-description-title eightbits\">\n        My Project 1\n      </p>\n\n      <p class=\"project-description-level\"><span class=\"level-title\">Level:</span><span class=\"level\">Advanced</span></p>\n\n      <p class=\"skill-description\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n        the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and\n        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n      </p>\n    </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/main-display/skills/skills.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/main-display/skills/skills.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".eightbits {\n  font-family: 'Press Start 2P', cursive;\n  color: #22b455;\n  letter-spacing: -1px; }\n\nh2.display-title {\n  text-align: center;\n  position: relative;\n  margin: 1% auto;\n  font-size: 50px;\n  color: #ff0072; }\n\n.title-and-gif-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\n.title-and-gif-container img {\n    padding: 0.5%;\n    background: #061725;\n    margin: 2% 0%;\n    width: 20%;\n    height: 150px;\n    border-radius: 20px; }\n\n.middle {\n  margin: 0 auto;\n  font-size: 1.5em; }\n\n.skills-container {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  height: 45vh; }\n\n.skill-container {\n  display: flex;\n  align-items: center;\n  font-size: 10px;\n  margin: 4% 0;\n  min-height: 150px; }\n\n.skill-image-container {\n  height: 100%;\n  max-width: 30%;\n  min-width: 100px;\n  min-height: 100px;\n  margin: 0 20px;\n  background: white;\n  border-radius: 10px; }\n\n.skill-image-container img {\n    border-radius: 10px;\n    width: 100%;\n    height: 250px; }\n\n.skill-description-container {\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start; }\n\n.skill-description-container p {\n    margin: 0; }\n\n.skill-description-container span.level-title {\n    color: red; }\n\n.skill-description-container span.level {\n    color: white; }\n\n.skill-description-container p.skill-description-title {\n    font-size: 1.5em;\n    margin-bottom: 2vh; }\n\n.skill-description-container p.skill-description-level {\n    margin-bottom: 1vh; }\n\n.skill-description-container p.skill-description-itself {\n    color: white;\n    word-break: break-word; }\n\n.skill-description-itself {\n  word-wrap: break-word; }\n\n@media screen and (max-width: 500px) {\n  .skill-container {\n    margin: 10% 0; }\n  .title-and-gif-container h2.display-title {\n    margin: 10% 0;\n    font-size: 1.6em; }\n  .title-and-gif-container img {\n    display: none; } }\n\n@media screen and (max-width: 800px) {\n  .title-and-gif-container h2 {\n    font-size: 2.5em; } }\n\n@media screen and (min-width: 600px) {\n  .skill-container {\n    font-size: 12px; } }\n\n@media screen and (min-width: 800px) {\n  .skill-container {\n    font-size: 15px; } }\n\n@-webkit-keyframes slideInFromLeft {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n@keyframes slideInFromLeft {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\nh2.eightbits.display-title {\n  -webkit-animation: 0.5s ease-out 0s 1 slideInFromLeft;\n          animation: 0.5s ease-out 0s 1 slideInFromLeft; }\n\n/* width */\n\n::-webkit-scrollbar {\n  width: 10px; }\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #1d2125; }\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #ff0072; }\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ3AvRG9jdW1lbnRzL2dpdC9teWJpdHMvbXliaXRzL2JhY2tiaXRzL2Zyb250Yml0cy9zcmMvYXBwL21haW4tZGlzcGxheS9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUp2QjtJQU9RLGFBQWE7SUFFYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFVBQVU7SUFFVixhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7O0FBSTNCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdsQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0VBRXpCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBUHZCO0lBVVEsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhLEVBQUE7O0FBSXJCO0VBQ0ksVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHVCQUF1QixFQUFBOztBQUwzQjtJQVFRLFNBQVMsRUFBQTs7QUFSakI7SUFZUSxVQUFVLEVBQUE7O0FBWmxCO0lBZ0JRLFlBQVksRUFBQTs7QUFoQnBCO0lBb0JRLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTs7QUFyQjFCO0lBeUJRLGtCQUFrQixFQUFBOztBQXpCMUI7SUE2QlEsWUFBWTtJQUNaLHNCQUFzQixFQUFBOztBQUk5QjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJO0lBQ0ksYUFBYSxFQUFBO0VBR2pCO0lBRVEsYUFBYTtJQUNiLGdCQUFnQixFQUFBO0VBSHhCO0lBT1EsYUFBYSxFQUFBLEVBQ2hCOztBQU1UO0VBQ0k7SUFHUSxnQkFBZ0IsRUFBQSxFQUNuQjs7QUFNVDtFQUNJO0lBQ0ksZUFBZSxFQUFBLEVBQ2xCOztBQUdMO0VBQ0k7SUFDSSxlQUFlLEVBQUEsRUFDbEI7O0FBSUw7RUFDRTtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQTtFQUU5QjtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQSxFQUFBOztBQUw1QjtFQUNFO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBO0VBRTlCO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBLEVBQUE7O0FBSTVCO0VBQ0UscURBQTZDO1VBQTdDLDZDQUE2QyxFQUFBOztBQUsvQyxVQUFBOztBQUNBO0VBQ0ksV0FBVyxFQUFBOztBQUdmLFVBQUE7O0FBQ0E7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkIsV0FBQTs7QUFDQTtFQUNJLG1CQUFtQixFQUFBOztBQUd2QixvQkFBQTs7QUFDQTtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1kaXNwbGF5L3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWlnaHRiaXRzIHtcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzIyYjQ1NTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDsgXG59XG5cbmgyLmRpc3BsYXktdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAxJSBhdXRvO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBjb2xvcjogI2ZmMDA3Mjtcbn1cblxuLnRpdGxlLWFuZC1naWYtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICAgIHBhZGRpbmc6IDAuNSU7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICMwMzA4MDQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwNjE3MjU7XG4gICAgICAgIG1hcmdpbjogMiUgMCU7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIC8vIGhlaWdodDogMjB2aDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG59XG5cbi5taWRkbGUge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLnNraWxscy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIC8vIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDQ1dmg7XG59XG5cbi5za2lsbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWFyZ2luOiA0JSAwO1xuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uc2tpbGwtaW1hZ2UtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW46IDAgMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgfVxufVxuXG4uc2tpbGwtZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIFxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgc3Bhbi5sZXZlbC10aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuXG4gICAgc3Bhbi5sZXZlbCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgICAgIFxuICAgIHAuc2tpbGwtZGVzY3JpcHRpb24tdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAydmg7XG4gICAgfVxuXG4gICAgcC5za2lsbC1kZXNjcmlwdGlvbi1sZXZlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDF2aDtcbiAgICB9XG5cbiAgICBwLnNraWxsLWRlc2NyaXB0aW9uLWl0c2VsZiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICB9XG59XG5cbi5za2lsbC1kZXNjcmlwdGlvbi1pdHNlbGYge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAuc2tpbGwtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAxMCUgMDtcbiAgICB9XG5cbiAgICAudGl0bGUtYW5kLWdpZi1jb250YWluZXIge1xuICAgICAgICBoMi5kaXNwbGF5LXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTAlIDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAudGl0bGUtYW5kLWdpZi1jb250YWluZXIge1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7IFxuICAgIC5za2lsbC1jb250YWluZXIge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgeyBcbiAgICAuc2tpbGwtY29udGFpbmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbn1cblxuLy8gYW5pbWF0aW9uc1xuQGtleWZyYW1lcyBzbGlkZUluRnJvbUxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuaDIuZWlnaHRiaXRzLmRpc3BsYXktdGl0bGUge1xuICBhbmltYXRpb246IDAuNXMgZWFzZS1vdXQgMHMgMSBzbGlkZUluRnJvbUxlZnQ7XG59XG5cblxuXG4vKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEwcHg7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWQyMTI1OyBcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDcyOyBcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1OyBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main-display/skills/skills.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main-display/skills/skills.component.ts ***!
  \*********************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_mybits_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mybits.service */ "./src/app/services/mybits.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(myBitsService) {
        this.myBitsService = myBitsService;
        this.skillsArray = [];
        this.displayTitle = "Skills!";
        this.hasError = false;
        this.loading = true;
    }
    SkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myBitsService.getSomeBitsAboutMe("skills").subscribe(function (response) {
            var rawHttpResponseBody = response.body;
            rawHttpResponseBody.forEach(function (skill) {
                // creates a typed object of the interface
                var s = {
                    title: skill["title"],
                    level: skill["level"],
                    description: skill["description"],
                    imageUrl: skill["image_url"]
                };
                // pushes to the typed array
                _this.skillsArray.push(s);
            });
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            _this.hasError = true;
            // logging when not in production
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
                console.log("Uh-oh! An exception was raised: [Status Code]:" + err["status"] + ", [Response]: " + err["statusText"]);
            }
        });
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/main-display/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/main-display/skills/skills.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_mybits_service__WEBPACK_IMPORTED_MODULE_1__["MyBitsService"]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/services/mybits.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/mybits.service.ts ***!
  \********************************************/
/*! exports provided: MyBitsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBitsService", function() { return MyBitsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Service used to get mybits info by making requests
 * to the backend API.
 */



var MyBitsService = /** @class */ (function () {
    /**
     * Default constructor for the service.
     *
     * @param httpClient (HttpClient) - Used to make HTTP requests to the backend API.
     */
    function MyBitsService(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Makes a request to the backend API in order to retrieve
     * data for the About Me section.
     *
     * @returns an HttpResponse object as an observable.
     */
    MyBitsService.prototype.getSomeBitsAboutMe = function (sectionName) {
        // maps the sectionName to the proper backend API url
        var urlMapping = {
            "aboutMe": _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MYBITS_ENDPOINT_ABOUTME,
            "projects": _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MYBITS_ENDPOINT_PROJECTS,
            "skills": _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MYBITS_ENDPOINT_SKILLS
        };
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MYBITS_HOST + urlMapping[sectionName];
        return this.httpClient.get(url, { observe: 'response' });
    };
    MyBitsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], MyBitsService);
    return MyBitsService;
}());



/***/ }),

/***/ "./src/app/services/web-socket.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/web-socket.service.ts ***!
  \************************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

// import { Injectable } from "@angular/core";
var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
    }
    /**
     * Connects using the WebSocket protocol.
     *
     * @param url: string - url to make a websocket connection to.
     *
     * @returns websocket: Rx.Subject<string> an rxjs
     */
    WebSocketService.prototype.connect = function (url) {
        // checks if we have a socket connection object
        if (!this.socket) {
            this.socket = this.create(url);
        }
        // returns the socket connection if undefined
        return this.socket;
    };
    /**
     * Creates a new websocket connection.
     *
     * @param url: string - url to make a websocket connection to.
     */
    WebSocketService.prototype.create = function (url) {
        // creates a websocket connection
        var ws = new WebSocket(url);
        // creates a new observable object
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(
        // executed when an observer subscribes to it
        // observable emits next, err, complete
        // observer executes a callback next, err, complete
        function (observer) {
            ws.onmessage = observer.next.bind(observer);
            ws.onerror = observer.error.bind(observer);
            ws.onclose = observer.complete.bind(observer);
            // return for the observer
            return ws.close.bind(ws);
        });
        var observer = {
            // callback to execute when an observable
            // emits a next value
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            },
        };
        // creates a subject (both an observer and observable)
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"].create(observer, observable);
    };
    return WebSocketService;
}());



/***/ }),

/***/ "./src/app/top-nav/top-nav.component.html":
/*!************************************************!*\
  !*** ./src/app/top-nav/top-nav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg top-nav\">\n  <a class=\"navbar-brand mx-auto\" [routerLink]=\"['/']\"><img src=\"/static/backbits/igp.png\" id=\"igp-logo\"></a>\n  </nav>\n\n<nav class=\"navbar navbar-expand-md bottom-nav navbar-light\">\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse text-center\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mx-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Chat Bot</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['about']\">About me</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['projects']\">Projects</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['skills']\">Skills</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['contacts']\">Contacts</a>\n      </li>\n    </ul>\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/top-nav/top-nav.component.scss":
/*!************************************************!*\
  !*** ./src/app/top-nav/top-nav.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Press+Start+2P\");\n.eightbits {\n  font-family: 'Press Start 2P', cursive;\n  color: #22b455;\n  letter-spacing: -1px; }\n.top-nav {\n  background-color: #0c263c;\n  justify-content: flex-start;\n  border-bottom: 1px solid white; }\n.nav-item a {\n  font-family: 'Press Start 2P', cursive;\n  font-size: 15px;\n  text-transform: capitalize;\n  letter-spacing: -1px;\n  margin: 0 30px;\n  color: #ffffff; }\n.nav-item a:hover {\n  color: #0d7b06; }\n.navbar {\n  padding: 0; }\n#igp-logo {\n  width: 300px;\n  min-height: 120px;\n  margin: auto; }\n.bottom-nav {\n  background-color: #82d08a;\n  border-bottom: 1px solid white; }\n.pipe {\n  max-width: 100px;\n  max-height: 100px;\n  display: none; }\n@media only screen and (min-width: 700px) {\n  .pipe {\n    display: inline-block; } }\n@-webkit-keyframes growFromCenter {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@keyframes growFromCenter {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\nimg#igp-logo {\n  -webkit-animation: growFromCenter 1s;\n          animation: growFromCenter 1s; }\n.navbar-toggler {\n  font-size: 25px;\n  color: white;\n  background-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ3AvRG9jdW1lbnRzL2dpdC9teWJpdHMvbXliaXRzL2JhY2tiaXRzL2Zyb250Yml0cy9zcmMvYXBwL3RvcC1uYXYvdG9wLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRUFBWTtBQUVaO0VBQ0ksc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxvQkFBb0IsRUFBQTtBQUd4QjtFQUVJLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUE7QUFHbEM7RUFDSSxzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsY0FBYztFQUVkLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGNBQWMsRUFBQTtBQUdsQjtFQUNJLFVBQVUsRUFBQTtBQUdkO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7QUFHaEI7RUFFSSx5QkFBeUI7RUFFekIsOEJBQThCLEVBQUE7QUFHbEM7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTtBQUdqQjtFQUNJO0lBQ0kscUJBQXFCLEVBQUEsRUFDeEI7QUFHTDtFQUNFO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBLEVBQUE7QUFMdkI7RUFDRTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQSxFQUFBO0FBR3ZCO0VBQ0Usb0NBQTRCO1VBQTVCLDRCQUE0QixFQUFBO0FBRzlCO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWiw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RvcC1uYXYvdG9wLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVByZXNzK1N0YXJ0KzJQXCIpO1xuXG4uZWlnaHRiaXRzIHtcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzIyYjQ1NTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDsgXG59XG5cbi50b3AtbmF2IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwMjA0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzI2M2M7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLm5hdi1pdGVtIGEge1xuICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDsgXG4gICAgbWFyZ2luOiAwIDMwcHg7XG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubmF2LWl0ZW0gYTpob3ZlciB7XG4gICAgY29sb3I6ICMwZDdiMDY7XG59XG5cbi5uYXZiYXIge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbiNpZ3AtbG9nbyB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmJvdHRvbS1uYXYge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM0YjZmNGY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgyZDA4YTtcbiAgICAvLyBoZWlnaHQ6IDR2aDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5waXBlIHtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICAucGlwZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZ3Jvd0Zyb21DZW50ZXIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5pbWcjaWdwLWxvZ28ge1xuICBhbmltYXRpb246IGdyb3dGcm9tQ2VudGVyIDFzO1xufVxuXG4ubmF2YmFyLXRvZ2dsZXIge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/top-nav/top-nav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-nav/top-nav.component.ts ***!
  \**********************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
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

var TopNavComponent = /** @class */ (function () {
    function TopNavComponent() {
    }
    TopNavComponent.prototype.ngOnInit = function () {
    };
    TopNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-nav',
            template: __webpack_require__(/*! ./top-nav.component.html */ "./src/app/top-nav/top-nav.component.html"),
            styles: [__webpack_require__(/*! ./top-nav.component.scss */ "./src/app/top-nav/top-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TopNavComponent);
    return TopNavComponent;
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
var environment = {
    production: false,
    WS_CHAT_URL: "ws://localhost:80/ws/chat/",
    MYBITS_HOST: "http://localhost:80/api/",
    MYBITS_ENDPOINT_ABOUTME: "about_me",
    MYBITS_ENDPOINT_PROJECTS: "projects",
    MYBITS_ENDPOINT_SKILLS: "skills"
};


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

module.exports = __webpack_require__(/*! /Users/igp/Documents/git/mybits/mybits/backbits/frontbits/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map