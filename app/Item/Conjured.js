"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Conjured = void 0;
var Item_1 = require("./Item");
// Classe AgedBrieItem qui hérite de la classe abstraite Item
// et implémente la méthode update pour mettre à jour
// les propriétés sellin et quality d'un article Conjured
var Conjured = /** @class */ (function (_super) {
    __extends(Conjured, _super);
    function Conjured() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Conjured.prototype.update = function () {
        this.updateSellIn();
        this.updateQuality();
        this.updateQuality();
        if (this.quality >= 50) {
            this.quality = 50;
        }
    };
    return Conjured;
}(Item_1.Item));
exports.Conjured = Conjured;
