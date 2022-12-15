"use strict";
exports.__esModule = true;
exports.ItemsRepository = void 0;
var AgedBrieItem_1 = require("./AgedBrieItem");
var BackstagePassesItem_1 = require("./BackstagePassesItem");
var Conjured_1 = require("./Conjured");
var DefaultItem_1 = require("./DefaultItem");
var LegendaryItem_1 = require("./LegendaryItem");
var fs = require("fs");
var ItemsRepository = /** @class */ (function () {
    function ItemsRepository(filePath) {
        this.filePath = filePath;
    }
    ItemsRepository.prototype.loadItems = function () {
        var data = fs.readFileSync(this.filePath).toString();
        return JSON.parse(data).map(function (itemData) {
            switch (itemData.name) {
                case "Aged Brie":
                    return new AgedBrieItem_1.AgedBrieItem(itemData.sellin, itemData.quality, itemData.value, itemData.name);
                case "Backstage passes":
                    return new BackstagePassesItem_1.BackstagePassesItem(itemData.sellin, itemData.quality, itemData.value, itemData.name);
                case "LegendaryItem":
                    return new LegendaryItem_1.LegendaryItem(itemData.sellin, itemData.quality, itemData.value, itemData.name);
                case "Conjured":
                    return new Conjured_1.Conjured(itemData.sellin, itemData.quality, itemData.value, itemData.name);
                default:
                    return new DefaultItem_1.DefaultItem(itemData.sellin, itemData.quality, itemData.name, itemData.value);
            }
        });
    };
    ItemsRepository.prototype.updateQuality = function () {
        var items = this.loadItems();
        items.forEach(function (item) { return item.update(); });
    };
    ItemsRepository.prototype.saveInventory = function (items) {
        var data = JSON.stringify(items);
        fs.writeFileSync(this.filePath, data);
    };
    ItemsRepository.prototype.getInventory = function () {
        return this.loadItems();
    };
    return ItemsRepository;
}());
exports.ItemsRepository = ItemsRepository;
