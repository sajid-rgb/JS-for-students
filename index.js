const dummyData = [ 
    {
        id:1,
        collection: 'movie',
        name: 'movie 1',
        producer: 'Test',
        budget: 230,
        currency: 'dollar',
        rating: 0
    }
]

// we will use this method for dynamic id
const getId = () => dummyData.length + 1;

//this method used for add some movies
const addMovie = (movieName,movieProducer,movieBudget,curr) => {
    const movieObj = {
        id: getId(),
        collection: 'movie',
        name: movieName,
        producer: movieProducer,
        budget: movieBudget,
        currency: curr,
        rating: 0
    };
    dummyData.push(movieObj);
};

addMovie('Jawan', 'Gauri Khan', 23455, 'dollar');
addMovie('Movie 2','Test5',5677777,'taka');
addMovie('Jawan', 'Gauri Khan', 23455, 'dollar');
addMovie('Movie 2','Test5',5677777,'taka');

//this method is used for displaying dummy data
const getMovies = () => dummyData;

console.log(getMovies());

const updateMovie = (id, updatedData, key) =>{
for(const data of dummyData){
    if(data.id === id){
        const objKeys = Object.keys(data);
        // console.log(objKeys,objKeys.includes(key));
        if(objKeys.includes(key)){
            data[key] = updatedData;
        }
       
    }
}
}

updateMovie(2,'Jawan 2','movieName')

updateMovie(2,9,'rating')

// console.log('after update',getMovies());

const deleteMovie = (id) => {
    for(const movie of dummyData){
        if(movie.id === id){
            const index = dummyData.indexOf(movie)
            console.log('index',index);
            dummyData.splice(index,1)
        }
    }
}

deleteMovie(2)

console.log('after delete',getMovies());
