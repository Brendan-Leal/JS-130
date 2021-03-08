"use strict";

class Item {
  constructor(itemName, category, quantity) {
    if (this.isValid(itemName, category, quantity)) {
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
      this.sku = this.setSKU();
    } else {
      this.notValid = true;
    }
  }

  setSKU() {
    let sku = "";
    let index = 0;
    let nameOfItem = this.itemName.replace(/\s/, "");

    while (sku.length < 3) {
      sku += nameOfItem[index];
      index += 1;
    }

    index = 0;

    while (sku.length < 5) {
      sku += this.category[index];
      index += 1;
    }
    return sku.toUpperCase();
  }

  isValid(itemName, category, quantity) {
    let lengthOfItemName = itemName.replace(/\s/, "").length;
    let isCategoryOneWord = category.split(" ").length === 1;

    return lengthOfItemName >= 5 && isCategoryOneWord && Number.isInteger(quantity);
  }
}

let ItemManager = (function () {

  return {
    items: [],

    create(itemName, category, quantity) {
      let item = new Item(itemName, category, quantity);
      if (item.sku) {
        this.items.push(item);
      }
      return item;
    },

    update(sku, obj) {
      this.items.forEach(item => {
        if (item.sku === sku) {
          for (const key in obj) {
            item[key] = obj[key];
          }
        }
      });
    },

    delete(sku) {
      let indexToDelete;
      
      this.items.forEach((item, index) => {
        if (item.sku === sku) {
          indexToDelete = index;
        }
      });

      this.items.splice(indexToDelete, 1);
    },


    inStock() {
      return this.items.filter(item => {
        return item.quantity > 0;
      });
    },

    itemsInCategory(category) {
      return this.items.map(item => {
        if (item.category === category) {
          return item.itemName;
        }
      }).join(", ");
    },
  };
})();

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
    return this;
  },

  reportInStock() {
    let itemsInStock = this.items.inStock();
    return itemsInStock.map(item => {
      return item.itemName;
    }).join(", ");
  },

  createReporter(sku) {
    let specifiedItem; 

    this.items.items.forEach(item => {
      if (item.sku === sku) {
        specifiedItem = item;
      }
    });
    
    return {
      itemInfo() {
        for (const key in specifiedItem) {
          console.log(`${key}: ${specifiedItem[key]}`);
        }
      }
    }
  }
};



ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
// console.log(ItemManager.items);

ReportManager.init(ItemManager);
// // logs soccer ball,football,kitchen pot
// console.log(ReportManager.reportInStock());

ItemManager.update('SOCSP', { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
// console.log(ItemManager.inStock());
// football,kitchen pot
// console.log(ReportManager.reportInStock());

// returns list with the item objects for basket ball, soccer ball, and football
// console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// // returns list the remaining 3 valid items (soccer ball is removed from the list)
// console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10