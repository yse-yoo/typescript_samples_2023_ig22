var itemNames = ["コーヒー", "紅茶", "ほうじ茶"];
console.log(itemNames);
var item1 = {
    id: 1,
    name: "コーヒー",
    price: 350,
};
var item2 = {
    id: 2,
    name: "紅茶",
    price: 400,
};
var item3 = {
    id: 3,
    name: "ほうじ茶",
    price: 300,
};
// var items:object[] = [item1, item2, item3];
var items = [item1, item2, item3];
var borderPrice = 300;
var filterItems = items.filter(function (item) { return item.price > borderPrice; });
console.log(filterItems);
