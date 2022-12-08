import { Shop } from "../app/Shop";
import { Item } from "../app/Item";
import { LegendaryItem } from "../app/LegendaryItem";
var assert = require('assert');

describe('Gilded-Rose-4', () =>{
    

    let shops: Shop;

    beforeEach(() =>{
        let items:Item[] = [new Item(1,1), new Item(0,2), new Item(0,0), new Item(0,0,"Aged Brie"), new Item(0,80), new LegendaryItem(undefined,80,"Sulfuras"), new Item(11,0,"Backstage passes"), new Item(10,0,"Backstage passes"), new Item(5,0,"Backstage passes"), new Item(0,5,"Backstage passes"), new Item(2,5,"Conjured")];
        
        shops = new Shop(items);
        shops.update();
    });

    it("Should item initialise", function(){
        
        assert.ok(shops != null, true);
    })

    it("Should item have sellin attribute", function(){
        assert.ok(shops.getItems()[0].sellin != null, true);
    })

    it("Should item have quality attribute", function(){
        assert.ok(shops.getItems()[0].quality != null, true);
    })

    it("Should sellin item decrease by 1", function(){
        assert(shops.getItems()[0].sellin === 0);
    })

    it("Should quality item decrease by 1", function(){
        assert(shops.getItems()[0].quality === 0);
    })

    it("Should sellin past 0 quality item decrease by 2", function(){
        assert(shops.getItems()[1].quality === 0);
        assert(shops.getItems()[1].sellin === -1);
    })

    it("quality item can't be negative", function(){
        assert(shops.getItems()[2].quality === 0);
    })

    it("Aged Brie quality increase", function(){
        assert(shops.getItems()[3].quality === 1);
    })

    it("product's quality cannot be over 50", function(){
        assert(shops.getItems()[4].quality === 50);
    })

    it("Sulfuras has no expiration date", function(){
        assert(shops.getItems()[5].sellin === undefined);
        assert(shops.getItems()[5].name === "Sulfuras");
    })

    it("Sulfuras quality cannot decrease", function(){
        assert(shops.getItems()[5].quality === 80);
        assert(shops.getItems()[5].name === "Sulfuras");
    })
    
    it("Backstage passes quality increase", function(){
        assert(shops.getItems()[6].quality === 1);
    })

    it("Backstage passes quality increase by 2 when sellin less or equal 10 days", function(){
        assert(shops.getItems()[7].quality === 2);
    })

    it("Backstage passes quality increase by 3 when sellin less or equal 3 days", function(){
        assert(shops.getItems()[8].quality === 3);
    })

    it("Backstage passes quality equal 0 when sellin equal 0 days", function(){
        assert(shops.getItems()[9].quality === 0);
    })

    it("Should Conjured quality item decrease by 2", function(){
        assert(shops.getItems()[10].quality === 3);
    })

})


