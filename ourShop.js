
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

const myCartItems = [];

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
const users = [];
 const getId = () => {
    const randomValue = Math.random()*10000;
    const randomID = Math.round(randomValue);
    return randomID;

 }

const addUsers = (name, email, password) => {
    const userObj = {
        id: getId(),
        name,
        email,
        password
    }
    const user = users.find(u => u.email === email)
    console.log(password.length);
    if(password.length < 6) {
        console.log('Password is not valid');
    }
    else if(user && user.id){

        console.log('User  already exists');
    } else {
        users.push(userObj)
    }
}

addUsers('Sajid','sajid@gmail.com','12345')
addUsers('Sajid','sajid@gmail.com','123456')
addUsers('Sajid','sajid@gmail.com','1234569')
console.log(users)

 let myProfile = {}
 const login = (email, password) => {
    const user = users.find(person => person.email === email && person.password === password);

    if (user) {
        console.log(`Login successful`);
        myProfile = {
            id: user.id,
            name: user.name,
            email: user.email
        }

    } else {
        console.log('Invalid email or password. Please try again.');
    }

}
login('sajid@gmail.com','123456')
console.log(myProfile);

const addToCart = (id) => {
 if(myProfile.id){
    const selectedItem = items.find(item=>item.id === id);
    if(selectedItem){
    const isItemExistOncart = myCartItems.includes(selectedItem)
        if(!isItemExistOncart){
        myCartItems.push(selectedItem);
        }
    }
 } else {
    console.log('You are not authenticated!')
 }
}
addToCart(10);
addToCart(8);
addToCart(67777);
addToCart(100);
console.log('cart: ',myCartItems,myCartItems.length);

