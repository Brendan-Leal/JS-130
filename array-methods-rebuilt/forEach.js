/* Remaking the for each method from scratch. One change required is that our custom function is not apart of the Array prototype.
*/
class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}


function forEach(array, callback, thisArg, ) {
  for (let index = 0; index < array.length; index++) {
    callback.call(thisArg, array[index], index, array);
  }
}

let foo = new Foo("Item: ");

forEach(["a", "b", "c"], function (value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});
// forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);