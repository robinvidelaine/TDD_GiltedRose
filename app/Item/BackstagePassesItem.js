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
exports.BackstagePassesItem = void 0;
var Item_1 = require("./Item");
// Classe AgedBrieItem qui hérite de la classe abstraite Item
// et implémente la méthode update pour mettre à jour
// les propriétés sellin et quality d'un article Backstage Passes
var BackstagePassesItem = /** @class */ (function (_super) {
    __extends(BackstagePassesItem, _super);
    function BackstagePassesItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackstagePassesItem.prototype.update = function () {
        if (this.sellin > 10) {
            this.quality += 1;
        }
        if (this.sellin <= 10 && this.sellin >= 6) {
            this.quality += 2;
        }
        if (this.sellin <= 5 && this.sellin >= 1) {
            this.quality += 3;
        }
        if (this.sellin <= 0) {
            this.quality = 0;
        }
        this.updateSellIn();
    };
    return BackstagePassesItem;
}(Item_1.Item));
exports.BackstagePassesItem = BackstagePassesItem;
