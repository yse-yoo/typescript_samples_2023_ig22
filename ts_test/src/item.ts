import { Item } from './type'

var itemNames: string[] = ["コーヒー", "紅茶", "ほうじ茶"];
console.log(itemNames)

var item1: Item = {
    id: 1,
    name: "コーヒー",
    price: 350,
}
var item2: Item = {
    id: 2,
    name: "紅茶",
    price: 400,
}
var item3: Item = {
    id: 3,
    name: "ほうじ茶",
    price: 300,
}
// var items:object[] = [item1, item2, item3];
var items: Item[] = [item1, item2, item3];
var borderPrice = 300;
var filterItems = items.filter((item) => item.price > borderPrice)
console.log(filterItems)

// function
// function caclculateTotalPrice(price:number, amount:number): number {
//     var totalPrice = price * amount;
//     return totalPrice;
// }
// anonymous function
// const caclculateTotalPrice = function(price:number, amount:number): number {
//     var totalPrice = price * amount;
//     return totalPrice;
// }
// arrow function
const caclculateTotalPrice = (price: number, amount: number): number => {
    var totalPrice = price * amount;
    return totalPrice;
}

var totalPrice = caclculateTotalPrice(item1.price, 5);
console.log(totalPrice);

// Union
var data: number | string;
data = 10;
data = "Tokyo";
console.log(data)

// any
// function findItem(id: number): any {
//     return items.find((item) => item.id == id);
// }
// var item: Item = findItem(2);

// Union: Item or undefined
function findItem(id: number): Item | undefined {
    return items.find((item) => item.id == id);
}

var item = findItem(3);
if (item == undefined) {
    console.log("Not found")
} else {
    console.log(item);
}

// callback
function purchase(id:number, amount:number, callback:(item:Item, amount:number) => boolean) {
    var item = findItem(id);
    if (item) {
        callback(item, amount);
    }
}

function payment(item:Item, amount:number):boolean {
    //TODO payment
    var totalPrice = caclculateTotalPrice(item.price, amount);
    console.log("Payment:" + totalPrice);
    return true;
}

purchase(1, 5, payment);