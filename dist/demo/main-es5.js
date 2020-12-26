(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\leclerc\Documents\IUT\2eme année\Projet Tuteuré\Dossier_git_projet\Projet-Tuteure\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1+jY":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accueil/accueil.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function jY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<script src=\"https://cdn.rawgit.com/serratus/quaggaJS/0420d5e0/dist/quagga.min.js\"></script>\r\n<script src=\"node_modules/quagga/quagga.min.js\"></script>\r\n\r\n\r\n<div  id=\"interactive\" class=\"viewport\" *ngIf=\"scanned==false\">\r\n\t<!-- QuaggaJS ici -->\t\r\n</div>\r\n<div *ngIf=\"scanned\" id=\"box\">\r\n\t<div id=\"score\">\r\n\t\t<h1>Ce produit est bon pour vous</h1>\r\n\t\t<h2>Allergènes: {{allergens}}</h2>\r\n\t\t<img class=\"label\" src={{novaGroup}} />\r\n\t\t<img class=\"label\" src={{nutriScore}} />\r\n\t</div>\r\n\t\t<img [src]=\"imageUrl\" />\r\n\t\t<br /><button type=\"button\">Ajouter à la liste</button>\r\n\t\t<h2>{{name}}</h2>\r\n\t\t<p>Description du produit</p>\r\n\t</div>\r\n";
      /***/
    },

    /***/
    "6P3Q":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/liste/liste.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function P3Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>test</p>\r\n<ul *ngFor=\"let product of productList\">\r\n    <li>Nom: {{product.name}} Allergènes: {{product.allergens}}</li>    \r\n</ul>";
      /***/
    },

    /***/
    "85Lx":
    /*!********************************************!*\
      !*** ./src/app/accueil/hello.component.ts ***!
      \********************************************/

    /*! exports provided: HelloComponent */

    /***/
    function Lx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelloComponent", function () {
        return HelloComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HelloComponent = function HelloComponent() {
        _classCallCheck(this, HelloComponent);
      };

      HelloComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        novaGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        imageUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nutriScore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      HelloComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "hello",
        template: "\n    <h1>Nom: {{ name }}</h1>\n    <p>Nova:{{ novaGroup }} Nutri:{{ nutriScore }}</p>\n    <img src=\"{{ imageUrl }}\" />\n  ",
        styles: ["\n      h1 {\n        font-family: Lato;\n      }\n    "]
      })], HelloComponent);
      /***/
    },

    /***/
    "8IyQ":
    /*!********************************************!*\
      !*** ./src/app/profil/profil.component.ts ***!
      \********************************************/

    /*! exports provided: ProfilComponent */

    /***/
    function IyQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilComponent", function () {
        return ProfilComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profil_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profil.component.html */
      "aFPW");
      /* harmony import */


      var _profil_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profil.component.css */
      "AYXS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _profil_utilisateur_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profil.utilisateur.model */
      "ehmE");

      var ProfilComponent = /*#__PURE__*/function () {
        function ProfilComponent(http) {
          _classCallCheck(this, ProfilComponent);

          this.http = http;
          this.utilisateur = new _profil_utilisateur_model__WEBPACK_IMPORTED_MODULE_5__["Utilisateur"]();
        }

        _createClass(ProfilComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var data;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.http.get('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/users', {
                        responseType: "json"
                      }).toPromise();

                    case 2:
                      data = _context.sent;
                      console.log(data);
                      this.utilisateur = {
                        id: data["data"][0]["id"],
                        nom: data["data"][0]["nom"],
                        prenom: data["data"][0]["prenom"],
                        email: data["data"][0]["email"],
                        mdp: data["data"][0]["mdp"]
                      };
                      Promise.resolve(this.utilisateur).then(function (value) {
                        _this.nom = value.nom;
                        _this.prenom = value.prenom;
                        _this.email = value.email;
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ProfilComponent;
      }();

      ProfilComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      };

      ProfilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-profil",
        template: _raw_loader_profil_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profil_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\r\n  font-family: Lato;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "AYXS":
    /*!*********************************************!*\
      !*** ./src/app/profil/profil.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function AYXS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWwuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /*
      Copyright Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license
      */

      /***/
    },

    /***/
    "EmOr":
    /*!***********************************************!*\
      !*** ./src/app/accueil/accueil.component.css ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function EmOr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\r\n  height: 150px;\r\n  width: auto;\r\n}\r\n.label {\r\n  height: 50px;\r\n  margin-bottom: 0px;\r\n  margin-top: 0px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\np {\r\n  width: 140px;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n#box {\r\n  width: 100%;\r\n  text-align: center;\r\n  color: blue;\r\n}\r\n#score {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY3VlaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImFjY3VlaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4ubGFiZWwge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5wIHtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4jYm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuI3Njb3JlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "I2e7":
    /*!**********************************************!*\
      !*** ./src/app/accueil/accueil.component.ts ***!
      \**********************************************/

    /*! exports provided: ConfigService, AccueilComponent */

    /***/
    function I2e7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return ConfigService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccueilComponent", function () {
        return AccueilComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_accueil_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./accueil.component.html */
      "1+jY");
      /* harmony import */


      var _accueil_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./accueil.component.css */
      "EmOr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _accueil_product_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./accueil.product.model */
      "wJr2");
      /* harmony import */


      var quagga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! quagga */
      "igAG");
      /* harmony import */


      var quagga__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(quagga__WEBPACK_IMPORTED_MODULE_6__);

      var ConfigService = function ConfigService(http) {
        _classCallCheck(this, ConfigService);

        this.http = http;
      };

      ConfigService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      };

      ConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
      })], ConfigService);

      var AccueilComponent = /*#__PURE__*/function () {
        function AccueilComponent(httpClient) {
          _classCallCheck(this, AccueilComponent);

          this.httpClient = httpClient;
          this.url = "https://world.openfoodfacts.org/api/v0/product/";
          this.product = new _accueil_product_model__WEBPACK_IMPORTED_MODULE_5__["Product"]();
          this.scanned = false;
          this.title = "app-projettut";
          this.ngOnInit();
        }

        _createClass(AccueilComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.scan();
          }
        }, {
          key: "getProductData",
          value: function getProductData(barcode) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var data;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(barcode);
                      _context2.next = 3;
                      return this.httpClient.get(this.url + barcode + ".json", {
                        responseType: "json"
                      }).toPromise();

                    case 3:
                      data = _context2.sent;
                      return _context2.abrupt("return", this.product = {
                        name: data["product"]["product_name"],
                        novaGroup: data["product"]["nova_group"],
                        imageUrl: data["product"]["image_small_url"],
                        nutriScore: data["product"]["nutriscore_grade"],
                        allergens: data["product"]["allergens"].replace(/en:/gi, "")
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "scan",
          value: function scan() {
            var _this2 = this;

            setTimeout(function () {
              quagga__WEBPACK_IMPORTED_MODULE_6___default.a.init({
                inputStream: {
                  constraints: {
                    facingMode: 'environment' // restrict camera type

                  },
                  area: {
                    top: '40%',
                    right: '0%',
                    left: '0%',
                    bottom: '40%' // bottom offset

                  }
                },
                decoder: {
                  readers: ['ean_reader'],
                  debug: {
                    drawBoundingBox: true,
                    showFrequency: true,
                    drawScanline: true,
                    showPattern: true
                  }
                }
              }, function (err) {
                if (err) {
                  _this2.errorMessage = "Probleme initialisation QuaggaJS : ".concat(err);
                  console.log(_this2.errorMessage);
                } else {
                  console.log("oui");
                  quagga__WEBPACK_IMPORTED_MODULE_6___default.a.start();
                  quagga__WEBPACK_IMPORTED_MODULE_6___default.a.onDetected(function (codeB) {
                    _this2.scanned = true;
                    console.log(codeB.codeResult.code);

                    _this2.setInformations(codeB.codeResult.code);

                    quagga__WEBPACK_IMPORTED_MODULE_6___default.a.stop();
                  });
                }
              });
            }, 1000);
          }
        }, {
          key: "setInformations",
          value: function setInformations(barcode) {
            var _this3 = this;

            console.log("bien entré");
            console.log(barcode);
            this.scanned = true;
            Promise.resolve(this.getProductData(barcode)).then(function (value) {
              _this3.name = value.name;

              switch (value.novaGroup) {
                case 1:
                  {
                    value.novaGroup = "https://i.postimg.cc/sMLHBcT9/nova1.png";
                    break;
                  }

                case 2:
                  {
                    value.novaGroup = "https://i.postimg.cc/XrqD7hkY/nova2.png";
                    break;
                  }

                case 3:
                  {
                    value.novaGroup = "https://i.postimg.cc/TpC4xGms/nova3.png";
                    break;
                  }

                case 4:
                  {
                    value.novaGroup = "https://i.postimg.cc/N5gzZLyT/nova4.png";
                    break;
                  }

                default:
                  {
                    break;
                  }
              }

              switch (value.nutriScore) {
                case "a":
                  {
                    value.nutriScore = "https://i.postimg.cc/s1NvBGp9/nutriA.png";
                    break;
                  }

                case "b":
                  {
                    value.nutriScore = "https://i.postimg.cc/gnLr3cs9/nutriB.png";
                    break;
                  }

                case "c":
                  {
                    value.nutriScore = "https://i.postimg.cc/vDB4Ht6Z/nutriC.png";
                    break;
                  }

                case "d":
                  {
                    value.nutriScore = "https://i.postimg.cc/QKHC4jrT/nutriD.png";
                    break;
                  }

                case "e":
                  {
                    value.nutriScore = "https://i.postimg.cc/cg1r3Q9T/nutriE.png";
                    break;
                  }

                default:
                  {
                    break;
                  }
              }

              _this3.imageUrl = value.imageUrl;
              _this3.nutriScore = value.nutriScore;
              _this3.allergens = value.allergens;
              _this3.novaGroup = value.novaGroup;
            });
          }
        }]);

        return AccueilComponent;
      }();

      AccueilComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      };

      AccueilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-accueil",
        template: _raw_loader_accueil_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_accueil_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AccueilComponent);
      /***/
    },

    /***/
    "K+Mw":
    /*!******************************************!*\
      !*** ./src/app/liste/liste.component.ts ***!
      \******************************************/

    /*! exports provided: ListeComponent */

    /***/
    function KMw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListeComponent", function () {
        return ListeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_liste_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./liste.component.html */
      "6P3Q");
      /* harmony import */


      var _liste_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./liste.component.css */
      "tO9y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../accueil/accueil.component */
      "I2e7");

      var ListeComponent = /*#__PURE__*/function () {
        function ListeComponent(http, test) {
          _classCallCheck(this, ListeComponent);

          this.http = http;
          this.test = test;
        }

        _createClass(ListeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var data, key;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.productList = [];
                      _context3.next = 3;
                      return this.http.get('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/listes', {
                        responseType: "json"
                      }).toPromise();

                    case 3:
                      data = _context3.sent;
                      _context3.t0 = regeneratorRuntime.keys(data['data']);

                    case 5:
                      if ((_context3.t1 = _context3.t0()).done) {
                        _context3.next = 15;
                        break;
                      }

                      key = _context3.t1.value;
                      this.test.getProductData(data['data'][key]['barcode']);
                      _context3.t2 = this.productList;
                      _context3.next = 11;
                      return Promise.resolve(this.test.getProductData(data['data'][key]['barcode']));

                    case 11:
                      _context3.t3 = _context3.sent;

                      _context3.t2.push.call(_context3.t2, _context3.t3);

                      _context3.next = 5;
                      break;

                    case 15:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return ListeComponent;
      }();

      ListeComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_5__["AccueilComponent"]
        }];
      };

      ListeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-liste",
        template: _raw_loader_liste_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_liste_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ListeComponent);
      /***/
    },

    /***/
    "Kyzr":
    /*!***********************************************!*\
      !*** ./src/app/top-bar/top-bar.component.css ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function Kyzr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtYmFyLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var md5 = __webpack_require__(
      /*! md5 */
      "aCH8");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(http) {
          _classCallCheck(this, AppComponent);

          this.http = http;
          this.connected = false;
        }

        _createClass(AppComponent, [{
          key: "onSubmit",
          value: function onSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var data, key;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log("connexion");
                      _context4.next = 3;
                      return this.http.get('https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/users', {
                        responseType: "json"
                      }).toPromise();

                    case 3:
                      data = _context4.sent;

                      for (key in data['data']) {
                        if (md5(this.mdp.nativeElement.value) == data["data"][key]["mdp"] && this.email.nativeElement.value == data["data"][key]["email"]) {
                          console.log("Vous êtes connecté");
                          this.connected = true;
                        } else {
                          console.log("Identifiant ou mot de passe incorrect");
                        }
                      }

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      };

      AppComponent.propDecorators = {
        email: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['email']
        }],
        mdp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['mdp']
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "my-app",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /*
      Copyright Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license
      */

      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<div class=\"connexion\" *ngIf=\"connected==false\">\r\n\t<p>admin@example.com</p><p>admin123456</p>\r\n\t<label>Mail</label>\r\n\t<input type=\"text\" #email/>\r\n\t<label>Mot de passe</label>\r\n\t<input type=\"text\" #mdp/>\r\n\t<button (click)=\"onSubmit()\">Se connecter</button>\r\n</div>\r\n<app-top-bar *ngIf=\"connected\"></app-top-bar>\r\n<div class=\"container\" *ngIf=\"connected\">\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n\r\n<!-- \r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at https://angular.io/license\r\n-->\r\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./top-bar/top-bar.component */
      "oDk3");
      /* harmony import */


      var _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./accueil/accueil.component */
      "I2e7");
      /* harmony import */


      var _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./profil/profil.component */
      "8IyQ");
      /* harmony import */


      var _accueil_hello_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./accueil/hello.component */
      "85Lx");
      /* harmony import */


      var _liste_liste_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./liste/liste.component */
      "K+Mw"); //import Quagga from "quagga/type-definitions/quagga";


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([{
          path: "",
          component: _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_8__["AccueilComponent"]
        }, {
          path: "profil",
          component: _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__["ProfilComponent"]
        }, {
          path: "liste",
          component: _liste_liste_component__WEBPACK_IMPORTED_MODULE_11__["ListeComponent"]
        }])],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"], //ProductListComponent,
        //ProductAlertsComponent,
        _liste_liste_component__WEBPACK_IMPORTED_MODULE_11__["ListeComponent"], _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_8__["AccueilComponent"], _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__["ProfilComponent"], _accueil_hello_component__WEBPACK_IMPORTED_MODULE_10__["HelloComponent"]],
        providers: [_accueil_accueil_component__WEBPACK_IMPORTED_MODULE_8__["AccueilComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /*
      Copyright Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license
      */

      /***/
    },

    /***/
    "aFPW":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function aFPW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<script src=\"../server.js\"></script>\r\n<h2>{{nom}}</h2>\r\n<button>Nom</button><br/>\r\n<h2>{{prenom}}</h2>\r\n<button>Prénom</button><br/>\r\n<h2>{{email}}</h2>\r\n<button>Mail</button><br/>\r\n<button>Mot de Passe</button><br/>\r\n<style>\r\n\tbutton {\r\n\t\tmargin-top: 10px;\r\n\t}\r\n</style>";
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "ehmE":
    /*!****************************************************!*\
      !*** ./src/app/profil/profil.utilisateur.model.ts ***!
      \****************************************************/

    /*! exports provided: Utilisateur */

    /***/
    function ehmE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Utilisateur", function () {
        return Utilisateur;
      });

      var Utilisateur = function Utilisateur() {
        _classCallCheck(this, Utilisateur);
      };
      /***/

    },

    /***/
    "oDk3":
    /*!**********************************************!*\
      !*** ./src/app/top-bar/top-bar.component.ts ***!
      \**********************************************/

    /*! exports provided: TopBarComponent */

    /***/
    function oDk3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
        return TopBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_top_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./top-bar.component.html */
      "ogDu");
      /* harmony import */


      var _top_bar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./top-bar.component.css */
      "Kyzr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TopBarComponent = /*#__PURE__*/function () {
        function TopBarComponent() {
          _classCallCheck(this, TopBarComponent);
        }

        _createClass(TopBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TopBarComponent;
      }();

      TopBarComponent.ctorParameters = function () {
        return [];
      };

      TopBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-top-bar",
        template: _raw_loader_top_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_top_bar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TopBarComponent);
      /*
      Copyright Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license
      */

      /***/
    },

    /***/
    "ogDu":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function ogDu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ul>\r\n\t<li>\r\n\t\t<a [routerLink]=\"['/']\">\r\n\r\n\t\t\t<div class=\"logo-image\">\r\n\t\t\t\t<img src=\"https://i.postimg.cc/fJzC2XGn/accueil.png\" />\r\n      </div>\r\n\t\t</a>\r\n\t</li>\r\n\t<li>\r\n\t\t<a [routerLink]=\"['profil']\">\r\n\t\t\t<div class=\"logo-image\">\r\n\t\t\t\t<img src=\"https://i.postimg.cc/P54GyQgx/profil.png\" />\r\n      </div>\r\n\t\t</a>\r\n\t</li>\r\n\t<li>\r\n\t\t<a [routerLink]=\"['liste']\">\r\n\t\t\t<div class=\"logo-image\">\r\n\t\t\t\t<img src=\"https://i.postimg.cc/9rLpv024/liste.png\" />\r\n      </div>\r\n\t\t</a>\r\n\t</li>\r\n\t<li>\r\n\t\t<a [routerLink]=\"['/']\">\r\n\t\t\t<div class=\"logo-image\">\r\n\t\t\t\t<img src=\"https://i.postimg.cc/rDzJcTyf/famille.png\" />\r\n      </div>\r\n\t\t</a>\r\n\t</li>\r\n</ul>\r\n\r\n<style>\r\n\tli {\r\n\t\tdisplay: inline-block;\r\n\t\tpadding-right: 10px;\r\n\t}\r\n\r\n\th2 {\r\n\t\tcolor: white;\r\n\t}\r\n</style>\r\n\r\n<!-- \r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at https://angular.io/license\r\n-->";
      /***/
    },

    /***/
    "tO9y":
    /*!*******************************************!*\
      !*** ./src/app/liste/liste.component.css ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function tO9y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0ZS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "wJr2":
    /*!**************************************************!*\
      !*** ./src/app/accueil/accueil.product.model.ts ***!
      \**************************************************/

    /*! exports provided: Product */

    /***/
    function wJr2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Product", function () {
        return Product;
      });

      var Product = function Product() {
        _classCallCheck(this, Product);
      };
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
      /*
      Copyright Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license
      */

      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map