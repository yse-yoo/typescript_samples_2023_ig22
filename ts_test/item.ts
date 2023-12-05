var itemNames:string[] = ["コーヒー", "紅茶", "ほうじ茶"];
console.log(itemNames)

type Item = {
    id: number;
    name: string;
    price: number;
}

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
var items = [item1, item2, item3];
var borderPrice = 300;
var filterItems = items.filter((item) => item.price > borderPrice )
console.log(filterItems)