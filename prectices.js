let allItems = [
  Item1 = {
    name:"bag",
    price: 12,
  },
  Item2  = {
    name: "brush",
    price:100
  },
  Item3  = {
    name: "shirt",
    price:103
  },
  Item4  = {
    name: "bag",
    price:103
  }
]

let filtered = allItems.filter((ele)=>{
 return ele.name === "bag"
})

console.log(filtered)
