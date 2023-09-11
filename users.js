const users = [];
 const getId = () => {
    const randomValue = Math.random()*10000;
    const randomID = Math.round(randomValue);
    return randomID;

 }

export const addUsers = (name, email, password) => {
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

export let myProfile = {}
export const login = (email, password) => {
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
