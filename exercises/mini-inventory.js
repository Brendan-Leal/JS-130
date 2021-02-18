"use strict";

function Item(itemName, category, quantity, sku) {
  this.itemName = itemName;
  this.category = category;
  this.quantity = quantity;
  this.sku = sku;
}


function createItemManager() {

  return {
    items: [],

    create(itemName, category, quantity) {
      if (this.isValidItem(itemName, category, quantity)) {
        let sku = this.getSku(itemName, category);

        this.items.push(new Item(itemName, category, quantity, sku));
      } else {
        return { notValid: true };
      }
    },

    update() {

    },

    delete() {

    },

    inStock() {

    },

    itemsInCategory() {

    },

    getSku(itemName, category) {
      let tempName = itemName;

      if (itemName.match(/\b^[a-z]*\b \b[a-z]*\b/)) {
        tempName = itemName.split(" ").join("");
      }

      let firstThreeOfItemName = tempName.split("").filter((_, index) => index < 3);
      let firstTwoOfCategory = category.split("").filter((_, index) => index < 2);

      return firstThreeOfItemName.join("") + firstTwoOfCategory.join("");
    },

    isValidItem(itemName, category, quantity) {
      return this.isValidItemName(itemName) &&
        this.isValidcategory(category) &&
        this.isValidQuatity(quantity);
    },

    isValidQuatity(quantity) {
      return Number.isInteger(quantity);
    },

    isValidcategory(category) {
      if (category.match(/\b^[a-z]{5,}$\b/)) {
        return true;
      } else {
        return false;
      }
    },

    isValidItemName(itemName) {
      let itemNameWithNoSpaces = itemName.split(" ").join("");
      return itemNameWithNoSpaces.length >= 5;
    },
  };

}

function createReportsManager() {

  return {

    init(itemManager) {
      
    },

    createReporter() {

    },

    reportInStock() {

    },

  };

}

let ItemManager = createItemManager();
let ReportManager = createReportsManager();

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// ItemManager.create('oh test', 'cooking', 3);

// console.log(ItemManager.create('asd', 'sports', 0)); // Not valid because item name is too short
// ItemManager.create('football', 'sports'); // Not valid because missing quatity
// ItemManager.create('kitchen pot', 'cooking items', 0); // not valid because category name is not one word
// // returns list with the 4 valid items
// console.log(ItemManager.items);

ReportManager.init(ItemManager);
console.log(ReportManager);
console.log(ItemManager);

// logs soccer ball,football,kitchen pot
// ReportManager.reportInStock();

// ItemManager.update('SOCSP', { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
// ItemManager.inStock();
// // football,kitchen pot
// ReportManager.reportInStock();

// // returns list with the item objects for basket ball, soccer ball, and football
// ItemManager.itemsInCategory('sports');

// ItemManager.delete('SOCSP');
// // returns list the remaining 3 valid items (soccer ball is removed from the list)
// ItemManager.items;

// let kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

// ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();

// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10