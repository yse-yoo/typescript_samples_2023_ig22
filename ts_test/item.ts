var itemNames:string[] = ["コーヒー", "紅茶", "ほうじ茶"];
console.log(itemNames)

var item1 = {
    id: 1,
    name: "コーヒー",
    price: 350,
}
var item2 = {
    id: 2,
    name: "紅茶",
    price: 400,
}
var item3 = {
    id: 3,
    name: "ほうじ茶",
    price: 300,
}
var items:object[] = [item1, item2, item3];
const borderPrice = 300
console.log(items)
// items.filter((item) => item.price > borderPrice )