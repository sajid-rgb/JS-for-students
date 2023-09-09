// initial different type of 10 objet
let items = [
    { id: 1, name: "Apple", category: "grocery", price: 2.5 },
    { id: 2, name: "Milk", category: "grocery", price: 1.8 },
    { id: 3, name: "Bread", category: "grocery", price: 2.0 },
    { id: 4, name: "Book", category: "other", price: 10.0 },
    { id: 5, name: "Eggs", category: "grocery", price: 3.0 },
    { id: 6, name: "Notebook", category: "other", price: 2.5 },
    { id: 7, name: "Banana", category: "grocery", price: 1.0 },
    { id: 8, name: "Pen", category: "other", price: 0.5 },
    { id: 9, name: "Cheese", category: "grocery", price: 4.0 },
    { id: 10, name: "Shoes", category: "other", price: 25.0 },
];

const newItems = [...items]

const categoryFilterItem = [{
    id: 1, name: "grocery"
},
{
    id: 2, name: "other",
}];

let selectedCategory = {};

const getProducts = () => items;
console.log('initial', getProducts());

const handleSelectedCategory = (id) =>{
    const selectedNewCategory = categoryFilterItem.find(c => c.id === id)
    selectedCategory = selectedNewCategory

}

handleSelectedCategory(2)

const handleApplyFilter = (filterItem) => {
    if(selectedCategory){
        const filteredItems = items.filter(item=>item.category === filterItem.name);
        items = filteredItems;
    }
}

const handleFilterPrice = (priceItem) => {
    const filteredItems = items.filter(item=>item.price >= priceItem.min && item.price <= priceItem.max);
    items = filteredItems;

}

// console.log(selectedCategory);

handleApplyFilter(selectedCategory);
handleFilterPrice({
    min: 0,
    max: 10
})
console.log('applyFilter', getProducts());

const clearFilter = () => {
    items = newItems
}

clearFilter()

console.log('clearFilter', getProducts());

