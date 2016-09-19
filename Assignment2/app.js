(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBought();
}

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var tobuy = this;

  tobuy.items = ShoppingListCheckOffService.getToBuy();

  tobuy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}


function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var item = {name :"ch",quantity :"1"};
  var items = [{name :"coke",quantity :"1 can"},
               {name :"cookies",quantity :"2 piece"},
               {name :"cookies",quantity :"3 bag"},
               {name :"soft drink",quantity :"4 bottle"},
          ];
  var bought = [];

  service.removeItem = function (itemIdex) {
    bought.push(items[itemIdex]);
    items.splice(itemIdex, 1);

  };

  service.getToBuy = function () {
    return items;
  };

  service.getBought = function () {
    return bought;
  };

}

})();
