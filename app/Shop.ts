// Importe la classes Item depuis un autre fichier dans le même répertoire
import { Item } from "./Item";

export class Shop {

    items: Item[];

    // Constructeur prenant en paramètre items.
    constructor(items: Item[]) {
      this.items = items;
    }

    // Renvoie la liste des items dans le magasin
    getItems() {
       return this.items;
    }

    // Met à jour les éléments dans le magasin en appelant la méthode update() pour chaque élément
    update() : void {
    this.items.forEach(function(item){
        item.update();
    }
    )
    }
}
