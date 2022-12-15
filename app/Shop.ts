// // Importe la classes Item depuis un autre fichier dans le même répertoire
// import { Item } from "./Item/Item";

// export class Shop {

//   private items: Item[];

//   // Constructeur prenant en paramètre items.
//   constructor(items: Item[]) {
//     this.items = items;
//   }

//   // Renvoie la liste des items dans le magasin
//   getItems() {
//     return this.items;
//   }

//   // Met à jour les éléments dans le magasin en appelant la méthode update() pour chaque élément
//   update(): void {
//     this.items.forEach(function (item) {
//       item.update();
//     }
//     )
//   }
// }



import { Item } from "./Item/Item";
import { ItemsRepository } from "./Item/ItemsRepository";

export class Shop {
private itemsRepository: ItemsRepository;

constructor(itemsRepository: ItemsRepository) {
this.itemsRepository = itemsRepository;
}

updateItems(): void {
  const items = this.itemsRepository.getInventory();
  for (let i = 0; i < items.length; i++) {
    items[i].update();
  }
  this.itemsRepository.saveInventory(items);
}

updateQuality() {
this.itemsRepository.updateQuality();
}

saveInventory(items) {
this.itemsRepository.saveInventory(items);
}

getInventory() {
return this.itemsRepository.getInventory();
}
}



// import { Item } from "./Item/Item";
// import { ItemsRepository } from "./Item/ItemsRepository";

// export class Shop {
//   private itemsRepository: ItemsRepository;

//   constructor(itemsRepository: ItemsRepository) {
//     this.itemsRepository = itemsRepository;
//   }

//   getItems(): Item[] {
//     return this.itemsRepository.getInventory();
//   }

//   updateItems(): void {
//     const items = this.itemsRepository.getInventory();
//     for (let i = 0; i < items.length; i++) {
//       items[i].update();
//     }
//     this.itemsRepository.saveInventory(items);
//   }
// }
// export { ItemsRepository };

